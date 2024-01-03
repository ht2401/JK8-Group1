document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        if (validateForm()) {
            window.location.href = "#"; 
          } else {
            event.preventDefault(); 
          }
    });

    function validateForm() {
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var websiteInput = document.getElementById('website');
        var messageInput = document.getElementById('message');
        var isValid = true;
        if (nameInput.value.trim() === '') {
          displayError(nameInput, 'Please enter your name.');
          isValid = false;
        } else {
          removeError(nameInput);
        }
        if (emailInput.value.trim() === '') {
          displayError(emailInput, 'Please enter your email.');
          isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
          displayError(emailInput, 'Please enter a valid email address.');
          isValid = false;
        } else {
          removeError(emailInput);
        }
        if (websiteInput.value.trim() === '') {
          displayError(websiteInput, 'Please enter your website.');
          isValid = false;
        } else {
          removeError(websiteInput);
        }
        if (messageInput.value.trim() === '') {
          displayError(messageInput, 'Please enter your message.');
          isValid = false;
        } else {
          removeError(messageInput);
        }
        return isValid;
      }
      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    function displayError(inputElement, errorMessage) {
      var errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = errorMessage;
      removeError(inputElement);
      inputElement.classList.add('error');
      inputElement.parentNode.appendChild(errorDiv);
    }
  
    function removeError(inputElement) {
      inputElement.classList.remove('error');
      var errorDiv = inputElement.parentNode.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }
  });
  