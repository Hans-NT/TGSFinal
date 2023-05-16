<?php
// Start the session
session_start();

// Include your database connection script
include('db_connection.php');

// Check if form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $loginMethod = $_POST['loginMethod'];
    $password = $_POST['password'];

    if($loginMethod == 'email') {
        $email = $_POST['email'];
        // SQL query to fetch information of registerd users and finds user match.
        $query = "SELECT email, password_hash FROM users WHERE email=? LIMIT 1";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $email);
    } else if($loginMethod == 'phone') {
        $phoneNumber = $_POST['phoneNumber'];
        // SQL query to fetch information of registerd users and finds user match.
        $query = "SELECT phone_number, password_hash FROM users WHERE phone_number=? LIMIT 1";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $phoneNumber);
    }

    $stmt->execute();
    $stmt->bind_result($user, $password_hash);
    $stmt->store_result();

    if($stmt->fetch()) {  //fetching the contents of the row
        // Compare the password hash
        if(password_verify($password, $password_hash)) {
            // Initialize session variables
            $_SESSION['login_user'] = $user;  // Initializing Session
            header("location: profile.php");  // Redirecting To Profile Page
        } else {
            $error = "Username or Password is invalid";
        }
    }
    mysqli_close($conn);  // Closing Connection
}
?>
