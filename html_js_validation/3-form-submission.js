document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('submitForm');

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (name === '' || email === '' || password === '' || confirmPassword === '' || message === '') {
            alert('Please fill in all required fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // If all validations pass, display success message
        alert('Form submitted successfully!');
    }

    // Add event listener to form submission
    form.addEventListener('submit', handleFormSubmit);
});
