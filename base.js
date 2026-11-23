// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('loggedInUser');

    if (user) {
        // Change Login button to Logout
        const loginBtn = document.querySelector('.btn-login');
        loginBtn.textContent = `Logout (${user})`;
        loginBtn.href = '#';

        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            alert('Logged out successfully!');
            location.reload();
        });
    }

    // Card animation on scroll
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * i);
    });
});