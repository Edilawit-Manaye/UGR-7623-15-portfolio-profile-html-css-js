document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.deva');
    const confirmationMessage = document.createElement('div');
    confirmationMessage.style.display = 'none'; // Initially hidden
    confirmationMessage.style.marginTop = '20px'; // Space above the message
    confirmationMessage.style.color = 'green'; // Confirmation message color
    form.appendChild(confirmationMessage); // Add the message to the form

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error messages
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');

        let valid = true;

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            valid = false;
            showError(name, 'Name is required.');
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            valid = false;
            showError(email, 'Please enter a valid email.');
        }

        // Validate Budget
        const budget = document.getElementById('budget');
        if (budget.value.trim() === '') {
            valid = false;
            showError(budget, 'Budget is required.');
        }

        // Validate Message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            valid = false;
            showError(message, 'Message is required.');
        }

        // If valid, show confirmation message
        if (valid) {
            confirmationMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            confirmationMessage.style.display = 'block'; // Show confirmation message

            // Optionally, reset the form
            form.reset();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red'; // Error message color
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }
});
/* for humberger*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show'); // Toggle visibility of the nav links
    });
});