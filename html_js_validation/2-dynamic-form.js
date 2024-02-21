document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('dynamicForm');
    const inputContainer = document.getElementById('inputContainer');
    const numFieldsSelect = document.getElementById('numFields');
  
    // Function to generate input fields dynamically
    function generateInputFields(num) {
      inputContainer.innerHTML = ''; // Clear previous fields
  
      for (let i = 1; i <= num; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        input.placeholder = 'Field ' + i;
        inputContainer.appendChild(input);
      }
    }
  
    // Event listener for changes in the dropdown selection
    numFieldsSelect.addEventListener('change', function() {
      generateInputFields(parseInt(this.value));
    });
  
    // Function to validate form before submission
    function validateForm(event) {
      event.preventDefault(); // Prevent default form submission
  
      const inputs = inputContainer.querySelectorAll('input[type="text"]');
      let isValid = true;
  
      // Check if any field is empty
      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
  
      // Display error message if any field is empty
      if (!isValid) {
        alert('Please fill in all fields');
      } else {
        form.submit(); // Submit the form if all fields are filled
      }
    }
  
    // Event listener for form submission
    form.addEventListener('submit', validateForm);
  });