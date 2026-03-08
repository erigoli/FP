<?php
declare(strict_types=1);

header('Content-Type: text/plain');

$host = '127.0.0.1';
$db   = 'financeprep';
$user = 'financeprep_user';
$pass = 'Baxter9894282004';

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    $email = 'test' . time() . '@example.com';
    $hash = password_hash('password123', PASSWORD_DEFAULT);

    $stmt = $pdo->prepare('INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)');
    $stmt->execute(['Test User', $email, $hash]);

    echo "INSERT WORKED: " . $email;
} catch (Throwable $e) {
    echo "INSERT ERROR: " . $e->getMessage();
}
