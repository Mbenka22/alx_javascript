

// Function to validate the email
function validateEmail() {
    var email = document.getElementById('email').value;
    var errorElement = document.getElementById('error');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = ""; // Clear any previous error message
        return true; // Allow form submission
    }
}

// Add event listener to the form for form submission
document.getElementById('emailForm').addEventListener('submit', function(event) {
    // Validate the email when the form is submitted
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
