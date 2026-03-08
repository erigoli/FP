<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json');

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

    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

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

        $stmt = $pdo->prepare("INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $hash]);

        $_SESSION['user'] = [
            'id' => (int)$pdo->lastInsertId(),
            'name' => $name,
            'email' => $email
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Signup successful',
            'user' => $_SESSION['user']
        ]);
        exit;
    }

    if ($action === 'login') {
        $stmt = $pdo->prepare("SELECT id, full_name, email, password_hash FROM users WHERE email = ?");
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
            'email' => $foundUser['email']
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
