const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelectorAll('.burger-menu__item');
const bookCardButtons = document.querySelectorAll('.book-card__button');

burgerButton.addEventListener('click', () => {
  toggleMenu();
});

burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
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

// function changeText() {
//   if(window.matchMedia('(max-width: 1219.9px)').matches) {
//     bookCardButtons[3].innerText = 'Buy';
//   } else {
//     bookCardButtons[3].innerText = 'Own';
//   }
// }

// changeText();

// function removeClass() {
//   if(window.matchMedia('(max-width: 1219.9px)').matches) {
//     bookCardButtons[3].classList.remove('book-card__button_disabled');
//     // bookCardButtons[3].removeAttribute("disabled");
//   } else {
//     bookCardButtons[3].classList.add('book-card__button_disabled');
//     // bookCardButtons[3].addAttribute("disabled");
//   }
// }

// removeClass();

// window.addEventListener('resize', function() {
//   removeClass();
//   changeText();
// });
