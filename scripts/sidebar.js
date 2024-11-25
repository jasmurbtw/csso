const sidebar = document.querySelector('.sidebar');
const toggleButton = document.querySelector('.sidebar-toggle');
const content = document.querySelector('.content');
const header = document.querySelector('header');

function updateHeaderWidth() {
    const hasVerticalScrollbar = content.scrollHeight > content.clientHeight;
    if (hasVerticalScrollbar) {
        header.style.width = `calc(100% - 17px)`;
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
    sidebar.style.overflowY = 'hidden';
    sidebar.classList.toggle('collapsed');

    setTimeout(() => {
        sidebar.style.overflowY = '';
    });

    setTimeout(updateHeaderWidth);
});

// const sidebar = document.querySelector('.sidebar');
// const toggleButton = document.querySelector('.sidebar-toggle');
// const ANIMATION_DURATION = 300;

// toggleButton.addEventListener('click', () => {
//     sidebar.style.overflowY = 'hidden';
//     sidebar.classList.toggle('collapsed');
// });