<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Include necessary files
  require_once 'validation.php';
  require_once 'database.php';

  // Process form submission
  // Validation
  $formData = $_POST;
  $errors = validateForm($formData);

  if (empty($errors)) {
    // Database operations
    $db = connectToDatabase();

    // Extract form data
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $streetAddress = $_POST['street-address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zipcode = $_POST['zipcode'];
    $password = $_POST['password'];

    // Prepare the SQL query
    $query = "INSERT INTO users (first_name, last_name, email, phone_number, street_address, city, state, zipcode, password) VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$streetAddress', '$city', '$state', '$zipcode', '$password')";

    // Execute the query
    executeQuery($db, $query);

    // Redirect to success page
    header("Location: success.php");
    exit();
  }
}
?>
