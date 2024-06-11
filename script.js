document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message and will get back to you at ${email}.`);
    
    // Optionally, you can add code here to send the form data to a server.
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    alert(`Welcome back! You are logged in with ${email}.`);
    
    // Optionally, you can add code here to send the login data to a server.
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    alert(`Thank you for signing up, ${name}! An email has been sent to ${email} to verify your account.`);
    
    // Optionally, you can add code here to send the signup data to a server.
});

// Show login form and hide others
document.getElementById('showLogin').addEventListener('click', function() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
});

// Show signup form and hide others
document.getElementById('showSignup').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('services').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
});

// Switch to signup form from login form
document.getElementById('toSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
});

// Switch to login form from signup form
document.getElementById('toLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
});
