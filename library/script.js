const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerItems = document.querySelectorAll('.burger-menu__item')

burgerButton.addEventListener('click', () => {
  toggleMenu();
});
burgerItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!burgerMenu.contains(targetElement) && !burgerButton.contains(targetElement)) {
    closeMenu();
  }
});

function toggleMenu() {
  burgerMenu.classList.toggle('active');
  burgerButton.classList.toggle('active');
}

function closeMenu() {
  burgerMenu.classList.remove('active');
  burgerButton.classList.remove('active');
}
