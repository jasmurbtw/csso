document.addEventListener('DOMContentLoaded', () => {
    const headerbutton = document.querySelector('.header-open-button');
    const headermisc = document.querySelector('.header-misc');

    headerbutton.addEventListener('click', () => {
        headermisc.classList.toggle('open');
    });

    document.querySelectorAll('.header-misc a').forEach(link => {
        link.addEventListener('click', () => {
            headermisc.classList.remove('open');
        });
    });

    document.querySelector('body').addEventListener('click', (event) => {
        if (!headermisc.contains(event.target) && !headerbutton.contains(event.target)) {
            headermisc.classList.remove('open');
        }
    });
});