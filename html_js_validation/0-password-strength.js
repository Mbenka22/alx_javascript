// Function to validate the password
function validatePassword() {
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        errorElement.textContent = "Password does not meet the criteria.";
        return false; // Prevent form submission
    } else {
        errorElement.textContent = ""; // Clear any previous error message
        return true; // Allow form submission
    }
}

// Add event listener to the form for form submission
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    // Validate the password when the form is submitted
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
