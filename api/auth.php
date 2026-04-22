<?php
// Handles login and signup requests, validates input, and stores authenticated user session data.
declare(strict_types=1);

session_start();
header('Content-Type: application/json');

require_once __DIR__ . '/db.php';

$host = '127.0.0.1';
$db   = 'financeprep';
$user = 'financeprep_user';
$pass = 'Baxter9894282004';

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode([
            'success' => false,
            'message' => 'Method not allowed'
        ]);
        exit;
    }

    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);

    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid JSON body'
        ]);
        exit;
    }

    $action = trim((string)($data['action'] ?? ''));
    $name = trim((string)($data['name'] ?? ''));
    $email = trim((string)($data['email'] ?? ''));
    $password = (string)($data['password'] ?? '');

    if ($action === '') {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Missing action'
        ]);
        exit;
    }

    if ($email === '' || $password === '') {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Email and password are required'
        ]);
        exit;
    }

    $pdo = db();

    if ($action === 'signup') {
        if ($name === '') {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Full name is required'
            ]);
            exit;
        }

        $check = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $check->execute([$email]);

        if ($check->fetch()) {
            http_response_code(409);
            echo json_encode([
                'success' => false,
                'message' => 'Email already exists'
            ]);
            exit;
        }

        $hash = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $pdo->prepare("
            INSERT INTO users (full_name, email, password_hash, study_streak, last_study_date)
            VALUES (?, ?, ?, 0, NULL)
        ");
        $stmt->execute([$name, $email, $hash]);

        $_SESSION['user'] = [
            'id' => (int)$pdo->lastInsertId(),
            'name' => $name,
            'email' => $email,
            'studyStreak' => 0,
            'lastStudyDate' => null
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Signup successful',
            'user' => $_SESSION['user']
        ]);
        exit;
    }

    if ($action === 'login') {
        $stmt = $pdo->prepare("
            SELECT id, full_name, email, password_hash, study_streak, last_study_date
            FROM users
            WHERE email = ?
        ");
        $stmt->execute([$email]);
        $foundUser = $stmt->fetch();

        if (!$foundUser || !password_verify($password, $foundUser['password_hash'])) {
            http_response_code(401);
            echo json_encode([
                'success' => false,
                'message' => 'Invalid email or password'
            ]);
            exit;
        }

        $_SESSION['user'] = [
            'id' => (int)$foundUser['id'],
            'name' => $foundUser['full_name'],
            'email' => $foundUser['email'],
            'studyStreak' => (int)$foundUser['study_streak'],
            'lastStudyDate' => $foundUser['last_study_date']
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Login successful',
            'user' => $_SESSION['user']
        ]);
        exit;
    }

    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid action'
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
