<?php
declare(strict_types=1);

const DB_HOST = '127.0.0.1';
const DB_NAME = 'financeprep';
const DB_USER = 'financeprep_user';
const DB_PASS = 'Baxter9894282004';

function envOrDefault(string $key, string $default): string
{
    $value = getenv($key);
    if ($value === false || $value === '') {
        return $default;
    }

    return $value;
}

function db(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $host = envOrDefault('DB_HOST', DB_HOST);
    $name = envOrDefault('DB_NAME', DB_NAME);
    $user = envOrDefault('DB_USER', DB_USER);
    $pass = envOrDefault('DB_PASS', DB_PASS);

    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $host, $name);

    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    return $pdo;
}
