window.addEventListener("load", function() 
{
   const emailLogin = document.getElementById("emailLogin");
   const phoneLogin = document.getElementById("phoneLogin");
   const emailLoginSection = document.getElementById("emailLoginSection");
   const phoneLoginSection = document.getElementById("phoneLoginSection");
   const emailInput = document.getElementById("email");
   const phoneNumberInput = document.getElementById("phoneNumber");

   emailLogin.addEventListener("change", function() 
   {
      emailLoginSection.style.display = "block";
      phoneLoginSection.style.display = "none";
      phoneNumberInput.value = ""; // Clear phone number field
      phoneNumberInput.removeAttribute("required");
      emailInput.setAttribute("required", "");
   });

   phoneLogin.addEventListener("change", function() 
   {
      emailLoginSection.style.display = "none";
      phoneLoginSection.style.display = "block";
      emailInput.value = ""; // Clear email field
      emailInput.removeAttribute("required");
      phoneNumberInput.setAttribute("required", "");
   });
});

function validateForm() 
{
   try 
   {
      const email = document.getElementById("email").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const password = document.getElementById("password").value.trim();

      // Check if email or phone number is selected
      const emailLogin = document.getElementById("emailLogin");
      const phoneLogin = document.getElementById("phoneLogin");
      if (!emailLogin.checked && !phoneLogin.checked) 
      {
         alert("Please select a login method");
         return false;
      }

      // Check if email is valid if selected
      if (emailLogin.checked && !/\S+@\S+\.\S+/.test(email)) 
      {
         emailError.textContent = "Please enter a valid email address";
         return false;
      }

      // Check if phone number is valid if selected
      if (phoneLogin.checked && (phoneNumber === "" || !/^\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/.test(phoneNumber))) 
      {
         phoneNumberError.textContent = "Please enter a valid phone number (XXX-XXX-XXXX)";
         return false;
      }

      // Check if password is empty or not valid
      const passwordError = document.getElementById("passwordError");
      if (password.length < 6) 
      {
         passwordError.textContent = "Password must be at least 6 characters long";
         passwordError.style.display = "block";
         return false;
      } 
      else 
      {
         passwordError.textContent = "";
         passwordError.style.display = "none";
      }

      // If all validations pass, return true to submit the form
      return true;
   }
   catch (error) 
   {
      console.error(error);
      return false;
   }
}
