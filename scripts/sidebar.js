document.addEventListener('DOMContentLoaded', () => {
    const headerbutton = document.querySelector('.header-open-button');
    const headermisc = document.querySelector('.header-misc');
    const headertext = document.querySelectorAll('.header-misc a');
    const main = document.querySelector('body');

    headerbutton.addEventListener('click', () => {
        headermisc.classList.toggle('open');
    });

    headertext.forEach(link => {
        link.addEventListener('click', () => {
            headermisc.classList.remove('open');
        });
    });

    main.addEventListener('click', (event) => {
        if (!headermisc.contains(event.target) && !headerbutton.contains(event.target)) {
            headermisc.classList.remove('open');
        }
    });
});