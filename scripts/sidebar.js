const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.header-nav-bar');
const content = document.querySelector('.content');
const header = document.querySelector('header');
const menuLinks = document.querySelectorAll('.sidebar');
const ANIMATION_DURATION = 300;

function updateHeaderWidth() {
    const hasVerticalScrollbar = content.scrollHeight > content.clientHeight;
    if (hasVerticalScrollbar) {
        header.style.width = 'calc(100% - 82px)';
    } else {
        header.style.width = '100%';
    }
}

const resizeObserver = new ResizeObserver(() => {
    updateHeaderWidth();
});
resizeObserver.observe(content);

updateHeaderWidth();
window.addEventListener('resize', updateHeaderWidth);

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');

    setTimeout(updateHeaderWidth);
});

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnToggle = event.target.closest('.header-nav-bar');

    if (!isClickInsideSidebar && !isClickOnToggle && ! sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('collapsed');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            sidebar.classList.add('collapsed');
        }, ANIMATION_DURATION);
    });
});