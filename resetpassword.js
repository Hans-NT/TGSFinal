const form = document.getElementById('password-reset-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;

  // Simulating a server request with a Promise
  new Promise((resolve, reject) => {
    // Replace this with the actual server request
    setTimeout(() => {
      if (email) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  })
    .then(() => {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      form.reset();
    })
    .catch(() => {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    });
});
