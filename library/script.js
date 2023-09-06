const SHADOW_OVERLAY = document.querySelector('.shadow-overlay');
const SIGN_UP_BUTTON = document.querySelector('.sign-up-button');
const LOGIN_BUTTON = document.querySelector('.login-button');
const HEADER_BURGER_BUTTON = document.querySelector('.header__burger-button .burger-button');
const HEADER_BURGER_MENU_LINKS = document.querySelectorAll('.header__burger-menu .burger-menu .burger-menu__item');
const HEADER_BURGER_MENU = document.querySelector('.header__burger-menu');
const HEADER_PROFILE_BUTTON = document.querySelector('.header__profile-button .profile-button');
const HEADER_PROFILE_MENU = document.querySelector('.header__profile-menu');
const HEADER_PROFILE_MENU_BUTTONS = document.querySelectorAll('.profile-menu__item');
const HEADER_PROFILE_MENU_REG_BUTTON = document.querySelector('.profile-menu__reg-button');
const HEADER_MODAL_OVERLAY = document.querySelector('.header__modal-overlay');
const HEADER_REG_FORM = document.querySelector('.header__reg-form');
const HEADER_REG_FORM_CLOSE_BUTTON = document.querySelector('.header__reg-form .auth-form__close-button');
const HEADER_LOGIN_FORM = document.querySelector('.header__login-form');
const HEADER_LOGIN_FORM_CLOSE_BUTTON = document.querySelector('.header__login-form .auth-form__close-button');
const HEADER_PROFILE_MENU_LOGIN_BUTTON = document.querySelector('.profile-menu__login-button');
const HEADER_LOGIN_FORM_REG_BUTTON = document.querySelector('.header__login-form-reg-button');
const HEADER_REG_FORM_LOGIN_BUTTON = document.querySelector('.header__reg-form-login-button');
const IMAGES_SLIDER_SLIDES_CONTAINER= document.querySelector('.images-slider__slides');
const IMAGES_SLIDER_BUTTONS = document.querySelectorAll('.images-slider__radio-buttons input[name="image-slide"]');
const IMAGES_SLIDER_SLIDE = document.querySelector('.images-slider__slide');
const IMAGES_SLIDER_ARROW_LEFT = document.querySelector('#images-slider__arrow-left');
const IMAGES_SLIDER_ARROW_RIGHT = document.querySelector('#images-slider__arrow-right');
const BOOK_CARD_BUTTONS = document.querySelectorAll('.book-card__button');
const BOOKS_SLIDER_SLIDES = document.querySelectorAll('.books-slider__slide');
const BOOKS_SLIDER_BUTTONS = document.querySelectorAll('.books-slider__radio-buttons input[name="books-slide"]');
const BOOKS_SLIDER_SLIDE = document.querySelector('.books-slider__slide');

function toggleActive(element) {
  element.classList.toggle('active');
}
function removeActive(element) {
  element.classList.remove('active');
}
function addActive(element) {
  element.classList.add('active');
}
function addInactive(element) {
  element.classList.add('inactive');
}
function removeInactive(element) {
  element.classList.remove('inactive');
}

function handleOutsideMenuClick (menu, button) {
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!menu.contains(targetElement) && !button.contains(targetElement)) {
      removeActive(menu);
      removeActive(button);
    }
  });
}
handleOutsideMenuClick(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleOutsideMenuClick(HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON);

function handleOutsideFormClick (form, overlay) {
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (overlay.contains(targetElement)) {
      removeActive(form);
      removeActive(overlay)
      addInactive(overlay);
    }
  });
}
handleOutsideFormClick(HEADER_REG_FORM, SHADOW_OVERLAY);
handleOutsideFormClick(HEADER_LOGIN_FORM, SHADOW_OVERLAY);

function handleMenuItemClick (menu, button, items) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      removeActive(menu);
      removeActive(button);
    });
  });
}
handleMenuItemClick (HEADER_BURGER_MENU, HEADER_BURGER_BUTTON, HEADER_BURGER_MENU_LINKS);
handleMenuItemClick (HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON, HEADER_PROFILE_MENU_BUTTONS);

function handleMenuToggleButtonClick (menu, openButton) {
  openButton.addEventListener('click', () => {
      toggleActive(menu);
      toggleActive(openButton);
  });
}
handleMenuToggleButtonClick(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleMenuToggleButtonClick(HEADER_PROFILE_MENU, HEADER_PROFILE_BUTTON);

function handleFormOpenButtonClick (authForm, openButton, overlay) {
  openButton.addEventListener('click', () => {
    addActive(authForm);
    addActive(overlay);
    removeInactive(overlay);
  });
}
handleFormOpenButtonClick(HEADER_LOGIN_FORM, HEADER_PROFILE_MENU_LOGIN_BUTTON, SHADOW_OVERLAY);
handleFormOpenButtonClick(HEADER_REG_FORM, HEADER_PROFILE_MENU_REG_BUTTON, SHADOW_OVERLAY);
handleFormOpenButtonClick(HEADER_LOGIN_FORM, LOGIN_BUTTON, SHADOW_OVERLAY);
handleFormOpenButtonClick(HEADER_REG_FORM, SIGN_UP_BUTTON, SHADOW_OVERLAY);


function handleFormCloseButtonClick (authForm, closeButton, overlay) {
  closeButton.addEventListener('click', () => {
    removeActive(authForm);
    removeActive(overlay);
    addInactive(overlay);
  });
}
handleFormCloseButtonClick(HEADER_LOGIN_FORM, HEADER_LOGIN_FORM_CLOSE_BUTTON, SHADOW_OVERLAY);
handleFormCloseButtonClick(HEADER_REG_FORM, HEADER_REG_FORM_CLOSE_BUTTON, SHADOW_OVERLAY);

function handleFormChangeButtonClick (currentForm, changeButton, targetForm) {
  changeButton.addEventListener('click', () => {
    removeActive(currentForm);
    addActive(targetForm);
  });
}
handleFormChangeButtonClick(HEADER_LOGIN_FORM, HEADER_LOGIN_FORM_REG_BUTTON, HEADER_REG_FORM);
handleFormChangeButtonClick(HEADER_REG_FORM, HEADER_REG_FORM_LOGIN_BUTTON, HEADER_LOGIN_FORM);














































function handleBooksSliderButtonChange(event) {
  const selectedValue = event.target.value;
  BOOKS_SLIDER_SLIDES.forEach(slide => {
    if (selectedValue === slide.id) {
      slide.classList.add('fade-in');
      slide.classList.remove('fade-out');
    } else {
      slide.classList.add('fade-out');
      slide.classList.remove('fade-in');
    }
  });
}
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
