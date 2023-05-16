<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'ghaziharara@gmail.com'; 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $headers = "From: $name <$email>";
    $success = mail($to, $subject, $message, $headers);
    
    if ($success) {
        http_response_code(200);
        echo "Thank you! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "Forbidden";
}
?>
