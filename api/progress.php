<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json');

require_once __DIR__ . '/db.php';

if (!isset($_SESSION['user'])) {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Not authenticated.',
    ]);
    exit;
}

$userId = (int)($_SESSION['user']['id'] ?? 0);

if ($userId <= 0) {
    http_response_code(401);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid session.',
    ]);
    exit;
}

$validTopics = [
    'accounting' => ['lessons' => 15, 'tests' => 1],
    'valuation' => ['lessons' => 15, 'tests' => 1],
    'financial-statements' => ['lessons' => 15, 'tests' => 1],
];

function getStatus(int $lessonsCompleted, int $testsCompleted, int $totalLessons, int $totalTests): string
{
    if ($lessonsCompleted === 0 && $testsCompleted === 0) {
        return 'Not Started';
    }

    if ($lessonsCompleted >= $totalLessons && $testsCompleted >= $totalTests) {
        return 'Completed';
    }

    return 'In Progress';
}

function updateStudyStreak(PDO $pdo, int $userId): array
{
    $stmt = $pdo->prepare('SELECT study_streak, last_study_date FROM users WHERE id = ? LIMIT 1');
    $stmt->execute([$userId]);
    $user = $stmt->fetch();

    if (!$user) {
        return [
            'studyStreak' => 0,
            'lastStudyDate' => null,
        ];
    }

    $currentStreak = (int)$user['study_streak'];
    $lastStudyDate = $user['last_study_date'];
    $today = new DateTimeImmutable('today');
    $todayString = $today->format('Y-m-d');

    if ($lastStudyDate === $todayString) {
        return [
            'studyStreak' => $currentStreak,
            'lastStudyDate' => $lastStudyDate,
        ];
    }

    if ($lastStudyDate !== null) {
        $lastDate = new DateTimeImmutable($lastStudyDate);
        $diffDays = (int)$lastDate->diff($today)->days;

        if ($diffDays === 1) {
            $currentStreak += 1;
        } else {
            $currentStreak = 1;
        }
    } else {
        $currentStreak = 1;
    }

    $updateStmt = $pdo->prepare('UPDATE users SET study_streak = ?, last_study_date = ? WHERE id = ?');
    $updateStmt->execute([$currentStreak, $todayString, $userId]);

    $_SESSION['user']['studyStreak'] = $currentStreak;
    $_SESSION['user']['lastStudyDate'] = $todayString;

    return [
        'studyStreak' => $currentStreak,
        'lastStudyDate' => $todayString,
    ];
}

try {
    $pdo = db();

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $pdo->prepare('
            SELECT topic_key, lessons_completed, tests_completed, status
            FROM user_topic_progress
            WHERE user_id = ?
        ');
        $stmt->execute([$userId]);
        $rows = $stmt->fetchAll();

        $userStmt = $pdo->prepare('SELECT study_streak, last_study_date FROM users WHERE id = ? LIMIT 1');
        $userStmt->execute([$userId]);
        $userRow = $userStmt->fetch();

        $progress = [];

        foreach ($validTopics as $topicKey => $counts) {
            $progress[$topicKey] = [
                'topicKey' => $topicKey,
                'lessonsCompleted' => 0,
                'testsCompleted' => 0,
                'status' => 'Not Started',
                'totalLessons' => $counts['lessons'],
                'totalTests' => $counts['tests'],
            ];
        }

        foreach ($rows as $row) {
            $topicKey = $row['topic_key'];
            if (!isset($progress[$topicKey])) {
                continue;
            }

            $lessonsCompleted = min((int)$row['lessons_completed'], $validTopics[$topicKey]['lessons']);
            $testsCompleted = min((int)$row['tests_completed'], $validTopics[$topicKey]['tests']);
            $status = getStatus(
                $lessonsCompleted,
                $testsCompleted,
                $validTopics[$topicKey]['lessons'],
                $validTopics[$topicKey]['tests']
            );

            $progress[$topicKey] = [
                'topicKey' => $topicKey,
                'lessonsCompleted' => $lessonsCompleted,
                'testsCompleted' => $testsCompleted,
                'status' => $status,
                'totalLessons' => $validTopics[$topicKey]['lessons'],
                'totalTests' => $validTopics[$topicKey]['tests'],
            ];
        }

        echo json_encode([
            'success' => true,
            'progress' => $progress,
            'studyStreak' => (int)($userRow['study_streak'] ?? 0),
            'lastStudyDate' => $userRow['last_study_date'] ?? null,
        ]);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode([
            'success' => false,
            'message' => 'Method not allowed.',
        ]);
        exit;
    }

    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);

    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid request body.',
        ]);
        exit;
    }

    $topicKey = trim((string)($data['topicKey'] ?? ''));
    $type = trim((string)($data['type'] ?? ''));
    $value = (int)($data['value'] ?? -1);

    if (!isset($validTopics[$topicKey])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid topic.',
        ]);
        exit;
    }

    if ($type !== 'lessons' && $type !== 'tests') {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid progress type.',
        ]);
        exit;
    }

    if ($value < 0) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid progress value.',
        ]);
        exit;
    }

    $totalLessons = $validTopics[$topicKey]['lessons'];
    $totalTests = $validTopics[$topicKey]['tests'];

    $selectStmt = $pdo->prepare('
        SELECT lessons_completed, tests_completed
        FROM user_topic_progress
        WHERE user_id = ? AND topic_key = ?
        LIMIT 1
    ');
    $selectStmt->execute([$userId, $topicKey]);
    $existing = $selectStmt->fetch();

    $lessonsCompleted = 0;
    $testsCompleted = 0;

    if ($existing) {
        $lessonsCompleted = (int)$existing['lessons_completed'];
        $testsCompleted = (int)$existing['tests_completed'];
    }

    if ($type === 'lessons') {
        $lessonsCompleted = min($value, $totalLessons);
    } else {
        $testsCompleted = min($value, $totalTests);
    }

    $status = getStatus($lessonsCompleted, $testsCompleted, $totalLessons, $totalTests);

    $upsertStmt = $pdo->prepare('
        INSERT INTO user_topic_progress (user_id, topic_key, lessons_completed, tests_completed, status)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            lessons_completed = VALUES(lessons_completed),
            tests_completed = VALUES(tests_completed),
            status = VALUES(status),
            updated_at = CURRENT_TIMESTAMP
    ');

    $upsertStmt->execute([
        $userId,
        $topicKey,
        $lessonsCompleted,
        $testsCompleted,
        $status,
    ]);

    $streakData = updateStudyStreak($pdo, $userId);

    echo json_encode([
        'success' => true,
        'progress' => [
            'topicKey' => $topicKey,
            'lessonsCompleted' => $lessonsCompleted,
            'testsCompleted' => $testsCompleted,
            'status' => $status,
            'totalLessons' => $totalLessons,
            'totalTests' => $totalTests,
        ],
        'studyStreak' => $streakData['studyStreak'],
        'lastStudyDate' => $streakData['lastStudyDate'],
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage(),
    ]);
}
