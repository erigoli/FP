<?php
// Returns whether a user session is active, plus user payload when authenticated.
declare(strict_types=1);

session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user'])) {
    echo json_encode([
        'loggedIn' => true,
        'user' => $_SESSION['user'],
    ]);
    exit;
}

echo json_encode([
    'loggedIn' => false,
]);
