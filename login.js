const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

// Demo credentials (in real app, verify on server)
const DEMO_USER = 'admin';
const DEMO_PASS = '1234';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Clear previous message
    message.textContent = '';
    message.className = 'message';

    // Basic validation
    if (!username || !password) {
        showMessage('Please fill all fields', 'error');
        return;
    }

    // Simulate login check
    if (username === DEMO_USER && password === DEMO_PASS) {
        showMessage('Login successful! Redirecting...', 'success');
        localStorage.setItem('loggedInUser', username);

        setTimeout(() => {
            window.location.href = 'base.html';
        }, 1200);
    } else {
        showMessage('Invalid username or password', 'error');
    }
});

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
}