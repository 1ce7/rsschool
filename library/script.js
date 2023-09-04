const HEADER_BURGER_BUTTON = document.querySelector('.header__burger-button .burger-button');
const HEADER_BURGER_LINKS = document.querySelectorAll('.header__burger-menu .burger-menu .burger-menu__item');
const HEADER_BURGER_MENU = document.querySelector('.header__burger-menu');
const HEADER_PROFILE_BUTTON = document.querySelector('.header__profile-button .profile-button');
const HEADER_PROFILE_MENU = document.querySelector('.header__profile-menu');
const HEADER_PROFILE_MENU_BUTTONS = document.querySelectorAll('.profile-menu__item');
const HEADER_PROFILE_MENU_REG_BUTTON = document.querySelector('.profile-menu__reg-button');
const HEADER_MODAL_OVERLAY = document.querySelector('.header__modal-overlay');
const HEADER_REG_FORM = document.querySelector('.header__reg-form');
const HEADER_REG_FORM_CLOSE_BUTTON = document.querySelector('.header__reg-form .auth-form__close-button');
const HEADER_PROFILE_MENU_LOG_BUTTON = document.querySelector('.profile-menu__log-in-button');
const HEADER_LOG_FORM = document.querySelector('.header__log-form');
const IMAGES_SLIDER_SLIDES_CONTAINER= document.querySelector('.images-slider__slides');
const IMAGES_SLIDER_BUTTONS = document.querySelectorAll('.images-slider__radio-buttons input[name="image-slide"]');
const IMAGES_SLIDER_SLIDE = document.querySelector('.images-slider__slide');
const IMAGES_SLIDER_ARROW_LEFT = document.querySelector('#images-slider__arrow-left');
const IMAGES_SLIDER_ARROW_RIGHT = document.querySelector('#images-slider__arrow-right');
const BOOK_CARD_BUTTONS = document.querySelectorAll('.book-card__button');
const BOOKS_SLIDER_SLIDES = document.querySelectorAll('.books-slider__slide');
const BOOKS_SLIDER_BUTTONS = document.querySelectorAll('.books-slider__radio-buttons input[name="books-slide"]');
const BOOKS_SLIDER_SLIDE = document.querySelector('.books-slider__slide');

function toggleMenu(menu, button) {
  menu.classList.toggle('active');
  button.classList.toggle('active');
}

function closeMenu(menu, button) {
  menu.classList.remove('active');
  button.classList.remove('active');
}

function handleMenuOutsideClick (menu, button) {
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!menu.contains(targetElement) && !button.contains(targetElement)) {
      closeMenu(menu, button);
    }
  });
}
handleMenuOutsideClick(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleMenuOutsideClick(HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON);


function handleMenuToggleButtonClick (menu, button) {
  button.addEventListener('click', () => {
    if(menu === HEADER_MODAL_OVERLAY && button === HEADER_REG_FORM_CLOSE_BUTTON) { //
      toggleMenu(menu, button);
      menu.classList.add('inactive');
      menu.addEventListener('animationend', () => {
        menu.classList.remove('inactive');
      });
    }
    else {
      toggleMenu(menu, button);
    }
  });
}
handleMenuToggleButtonClick(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleMenuToggleButtonClick(HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON);
handleMenuToggleButtonClick(HEADER_MODAL_OVERLAY, HEADER_PROFILE_MENU_REG_BUTTON); //HEADER_MODAL_OVERLAY contain HEADER_REG_MENU
handleMenuToggleButtonClick(HEADER_MODAL_OVERLAY, HEADER_REG_FORM_CLOSE_BUTTON);

function handleBooksSliderButtonChange(event) {
  const selectedValue = event.target.value;
  // Перебираем все слайды
  BOOKS_SLIDER_SLIDES.forEach(slide => {
    // Проверяем, соответствует ли значение радиокнопки идентификатору слайда
    if (selectedValue === slide.id) {
      // Показываем нужный слайд
      slide.classList.add('fade-in');
      slide.classList.remove('fade-out');
    } else {
      // Прячем остальные слайды
      slide.classList.add('fade-out');
      slide.classList.remove('fade-in');
    }
  });
}

HEADER_BURGER_LINKS.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
  });
});

HEADER_PROFILE_MENU_BUTTONS.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu(HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON);
    HEADER_REG_FORM_CLOSE_BUTTON.classList.toggle('active');
  });
});

IMAGES_SLIDER_BUTTONS.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    let slideWidth = IMAGES_SLIDER_SLIDE.offsetWidth + parseInt((window.getComputedStyle(IMAGES_SLIDER_SLIDES_CONTAINER).columnGap), 10);
    IMAGES_SLIDER_SLIDES_CONTAINER.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
    radio.classList.add('disabled');
    IMAGES_SLIDER_BUTTONS.forEach((otherRadio, otherIndex) => {
      if (otherIndex !== index) {
        otherRadio.classList.remove('disabled');
      }
    });
  });
});

IMAGES_SLIDER_ARROW_LEFT.addEventListener('click', () => {
  const currentIndex = Array.from(IMAGES_SLIDER_BUTTONS).findIndex(radio => radio.checked);
  const previousIndex = (currentIndex - 1 + IMAGES_SLIDER_BUTTONS.length) % IMAGES_SLIDER_BUTTONS.length;
  IMAGES_SLIDER_BUTTONS[previousIndex].checked = true;
  IMAGES_SLIDER_BUTTONS[previousIndex].dispatchEvent(new Event('change'));
});

IMAGES_SLIDER_ARROW_RIGHT.addEventListener('click', () => {
  const currentIndex = Array.from(IMAGES_SLIDER_BUTTONS).findIndex(radio => radio.checked);
  const nextIndex = (currentIndex + 1) % IMAGES_SLIDER_BUTTONS.length;
  IMAGES_SLIDER_BUTTONS[nextIndex].checked = true;
  IMAGES_SLIDER_BUTTONS[nextIndex].dispatchEvent(new Event('change'));
});
IMAGES_SLIDER_BUTTONS.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    IMAGES_SLIDER_ARROW_LEFT.classList.remove('disabled');
    IMAGES_SLIDER_ARROW_RIGHT.classList.remove('disabled');
    if (index === 0) {
      IMAGES_SLIDER_ARROW_LEFT.classList.add('disabled');
    }
    if (index === IMAGES_SLIDER_BUTTONS.length - 1) {
      IMAGES_SLIDER_ARROW_RIGHT.classList.add('disabled');
    }
  });
});


BOOKS_SLIDER_BUTTONS.forEach(radio => {
  radio.addEventListener('change', handleBooksSliderButtonChange);
});
