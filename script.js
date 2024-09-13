const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Zmiana klasy body na jasny lub ciemny motyw
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
