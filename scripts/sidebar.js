const toggleButton = document.querySelector('.header-open-button');
const header = document.querySelector('header');
const menuLinks = document.querySelectorAll('header a');

toggleButton.addEventListener('click', () => {
    header.classList.toggle('collapsed');
});

document.addEventListener('click', (event) => {
    const isClickInsideHeader = header.contains(event.target);
    const isClickOnToggle = event.target.closest('.header-open-button');

    if (!isClickInsideHeader && !isClickOnToggle && ! header.classList.contains('collapsed')) {
        header.classList.add('collapsed');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            header.classList.add('collapsed');
        }, 300);
    });
});