// Function to display success message and redirect to success page
function displaySuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.className = 'success-message';
  successMessage.textContent = 'Registration successful. Redirecting to confirmation page...';

  const form = document.querySelector('form');
  form.appendChild(successMessage);

  // Redirect to success page after a delay
  setTimeout(() => {
    window.location.href = 'success.php';
  }, 3000); // Adjust the delay time as needed (e.g., 3000ms = 3 seconds)
}

// Function to display error message and highlight input field
function displayErrorMessage(inputField, message) {
  const errorElement = document.createElement('p');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  errorElement.setAttribute('role', 'alert');
  errorElement.setAttribute('aria-live', 'assertive');

  const formGroup = inputField.closest('.form-group');
  formGroup.appendChild(errorElement);

  inputField.classList.add('error-input');
}

// Function to remove error message and highlighting
function removeErrorMessage(inputField) {
  const formGroup = inputField.closest('.form-group');
  const errorElement = formGroup.querySelector('.error-message');
  if (errorElement) {
    formGroup.removeChild(errorElement);
  }
}

// Function to validate form data
function validateForm(event) {
  event.preventDefault();

  // Reset all error messages and highlighting
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach((errorMessage) => errorMessage.remove());

  const errorInputs = document.querySelectorAll('.error-input');
  errorInputs.forEach((input) => input.classList.remove('error-input'));

  // Get input values
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Check for errors
  let errorMessage = '';
  const { firstName, lastName, email, phoneNumber, streetAddress, city, state, zipcode, password, confirmPassword, terms, privacy } = data;

  if (!validateFirstName(firstName)) {
    errorMessage = 'Please enter a valid first name.';
    displayErrorMessage(form.elements['first-name'], errorMessage);
  }

  if (!validateLastName(lastName)) {
    errorMessage = 'Please enter a valid last name.';
    displayErrorMessage(form.elements['last-name'], errorMessage);
  }

  if (!validateEmail(email)) {
    errorMessage = 'Please enter a valid email address.';
    displayErrorMessage(form.elements.email, errorMessage);
  }

  if (!validatePhoneNumber(phoneNumber)) {
    errorMessage = 'Please enter a valid phone number (XXX-XXX-XXXX).';
    displayErrorMessage(form.elements.phoneNumber, errorMessage);
  }

  if (!validateStreetAddress(streetAddress)) {
    errorMessage = 'Please enter a valid street address.';
    displayErrorMessage(form.elements['street-address'], errorMessage);
  }

  if (!validateCity(city)) {
    errorMessage = 'Please enter a valid city.';
    displayErrorMessage(form.elements.city, errorMessage);
  }

  if (!validateState(state)) {
    errorMessage = 'Please enter a valid state.';
    displayErrorMessage(form.elements.state, errorMessage);
  }

  if (!validateZipcode(zipcode)) {
    errorMessage = 'Please enter a valid zipcode.';
    displayErrorMessage(form.elements.zipcode, errorMessage);
  }

   if (password !== formData['confirm-password']) {
     errorMessage = 'Passwords do not match.';
     displayErrorMessage(form.elements['confirm-password'], errorMessage);
   }

  if (!terms.checked) {
    errorMessage = 'You must agree to the Terms of Service.';
    displayErrorMessage(terms, errorMessage);
  }

  if (!privacy.checked) {
    errorMessage = 'You must agree to the Privacy Policy.';
    displayErrorMessage(privacy, errorMessage);
  }

  // If there are no errors, submit the form
  if (!errorMessage) {
    // You can perform further processing here, such as sending form data to a server
    // For now, we'll simulate form submission by logging the form data to the console
    console.log('Form submitted:', data);

    // Display success message and redirect to confirmation page
    displaySuccessMessage();
  }
}

// Add event listener to form submission
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);

function checkPasswordStrength(password) {
  let strength = 0;

  // Check length - minimum 8 characters
  if (password.length >= 8) strength++;

  // Check for lowercase letters
  if (/[a-z]/.test(password)) strength++;

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) strength++;

  // Check for numbers
  if (/[0-9]/.test(password)) strength++;

  // Check for special characters
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;

  return strength;
}

// Function to update password strength indicator
function updatePasswordStrengthIndicator() {
  const password = passwordInput.value;

  // Simple password strength estimation
  let strength = 0;
  if (password.length > 5) strength++;
  if (password.length > 7) strength++;
  if (password.length > 9) strength++;

  // Update password strength indicator
  switch (strength) {
    case 0:
      passwordStrengthIndicator.style.width = '0%';
      passwordStrengthIndicator.style.backgroundColor = 'red';
      break;
    case 1:
      passwordStrengthIndicator.style.width = '33%';
      passwordStrengthIndicator.style.backgroundColor = 'orange';
      break;
    case 2:
      passwordStrengthIndicator.style.width = '66%';
      passwordStrengthIndicator.style.backgroundColor = 'yellow';
      break;
    case 3:
      passwordStrengthIndicator.style.width = '100%';
      passwordStrengthIndicator.style.backgroundColor = 'green';
      break;
  }
}

// Password strength indicator
const passwordInput = document.getElementById('password');
const passwordStrengthIndicator = document.getElementById('password-strength-indicator');

passwordInput.addEventListener('input', updatePasswordStrengthIndicator);
