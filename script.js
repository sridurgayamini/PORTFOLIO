// Task 6: JavaScript for interactivity and form validation

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you for your message, ' + name + '!');
        // Here you can add code to send form data to your server
        // Reset form fields
        document.getElementById('contactForm').reset();
    }
});
