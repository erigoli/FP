<?php
declare(strict_types=1);

header('Content-Type: text/plain');

require_once __DIR__ . '/db.php';

try {
    $pdo = db();
    echo "Database connection successful";
} catch (Throwable $e) {
    echo "Database connection failed: " . $e->getMessage();
}
