const menuButton = document.querySelector('.menu-button');
const menuButtonClose = document.querySelector('.menu-button-close');
const sideMenu = document.querySelector('.side-menu');

const toggleMenu = (open) => {
  sideMenu.style.left = open ? '0px' : '-250px';
};

menuButton.addEventListener('click', () => {
  toggleMenu(true);
});

menuButtonClose.addEventListener('click', () => {
  toggleMenu(false);
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnButton = menuButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    toggleMenu(false);
  }
});
