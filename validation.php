<?php
function validateEmail($email) {
  $email = trim($email);

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    return false; // Invalid email format
  }

  return true; // Email is valid
}

function validatePhoneNumber($phoneNumber) {
  $phoneNumber = preg_replace('/\D/', '', $phoneNumber);

  if (!preg_match('/^\d{3}-\d{3}-\d{4}$/', $phoneNumber)) {
    return false; // Invalid phone number format
  }

  return true; // Phone number is valid
}

function validateFirstName($firstName) {
  // Remove leading and trailing whitespace
  $firstName = trim($firstName);

  // Validate first name format
  if (empty($firstName)) {
    return false; // First name is required
  }

  return true; // First name is valid
}

function validateLastName($lastName) {
  $lastName = trim($lastName);

  if (empty($lastName)) {
    return false; // Last name is required
  }

  return true; // Last name is valid
}

function validateStreetAddress($streetAddress) {
  $streetAddress = trim($streetAddress);

  if (empty($streetAddress)) {
    return false; // Street address is required
  }

  return true; // Street address is valid
}

function validateCity($city) {
  $city = trim($city);

  if (empty($city)) {
    return false; // City is required
  }

  return true; // City is valid
}

function validateState($state) {
  $state = trim($state);

  if (empty($state)) {
    return false; // State is required
  }

  return true; // State is valid
}

function validateZipcode($zipcode) {
  $zipcode = preg_replace('/\D/', '', $zipcode);

  if (!preg_match('/^\d{5}$/', $zipcode)) {
    return false; // Invalid zipcode format
  }

  return true; // Zipcode is valid
}

// Add validation logic for other form fields

function validateForm($formData) {
  $errors = [];

  // Extract form data
  $firstName = $formData['first-name'];
  $lastName = $formData['last-name'];
  $email = $formData['email'];
  $phoneNumber = $formData['phoneNumber'];
  $streetAddress = $formData['street-address'];
  $city = $formData['city'];
  $state = $formData['state'];
  $zipcode = $formData['zipcode'];
  // Add other form fields as needed

  // Perform validation for each field
  if (!validateFirstName($firstName)) {
    $errors[] = 'Invalid first name.';
  }

  if (!validateLastName($lastName)) {
    $errors[] = 'Invalid last name.';
  }

  if (!validateEmail($email)) {
    $errors[] = 'Invalid email address.';
  }

    if (!validatePhoneNumber($phoneNumber)) {
    $errors[] = 'Invalid phone number.';
  }

  if (!validateStreetAddress($streetAddress)) {
    $errors[] = 'Invalid street address.';
  }

  if (!validateCity($city)) {
    $errors[] = 'Invalid city.';
  }

  if (!validateState($state)) {
    $errors[] = 'Invalid state.';
  }

  if (!validateZipcode($zipcode)) {
    $errors[] = 'Invalid zipcode.';
  }

  // Add validation logic for other form fields

  // Return the errors array
  return $errors;
}


?>
