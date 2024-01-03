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
      
        // Kiểm tra ô "Name"
        if (nameInput.value.trim() === '') {
          displayError(nameInput, 'Please enter your name.');
          isValid = false;
        } else {
          removeError(nameInput);
        }
      
        // Kiểm tra ô "Email"
        if (emailInput.value.trim() === '') {
          displayError(emailInput, 'Please enter your email.');
          isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
          displayError(emailInput, 'Please enter a valid email address.');
          isValid = false;
        } else {
          removeError(emailInput);
        }
      
        // Kiểm tra ô "Website"
        if (websiteInput.value.trim() === '') {
          displayError(websiteInput, 'Please enter your website.');
          isValid = false;
        } else {
          removeError(websiteInput);
        }
      
        // Kiểm tra ô "Message"
        if (messageInput.value.trim() === '') {
          displayError(messageInput, 'Please enter your message.');
          isValid = false;
        } else {
          removeError(messageInput);
        }
      
        return isValid;
      }
      
      function isValidEmail(email) {
        // Hàm kiểm tra định dạng email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      
  
    function displayError(inputElement, errorMessage) {
      // Hiển thị thông báo lỗi và thêm một lớp CSS để làm nổi bật
      var errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = errorMessage;
  
      // Xóa lớp CSS lỗi cũ nếu có
      removeError(inputElement);
  
      // Thêm lớp CSS mới
      inputElement.classList.add('error');
      inputElement.parentNode.appendChild(errorDiv);
    }
  
    function removeError(inputElement) {
      // Xóa lớp CSS lỗi và thông báo lỗi nếu có
      inputElement.classList.remove('error');
      var errorDiv = inputElement.parentNode.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.parentNode.removeChild(errorDiv);
      }
    }
  });
  