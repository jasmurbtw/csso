const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const ANIMATION_DURATION = 300;

toggleButton.addEventListener('click', () => {
    sidebar.style.overflowY = 'hidden';
    sidebar.classList.toggle('collapsed');

    setTimeout(() => {
        if (!sidebar.classList.contains('collapsed') && sidebar.scrollHeight > 50) {
            sidebar.style.overflowY = 'auto';
        }
    }, ANIMATION_DURATION);
});