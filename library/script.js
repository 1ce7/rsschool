const SHADOW_OVERLAY = document.querySelector('.shadow-overlay');
const HEADER_MODAL_PROFILE = document.querySelector('.header__modal-profile');
const HEADER_MODAL_BUY_CARD = document.querySelector('.header__modal-buy-card')
const BUY_BUTTONS = document.querySelectorAll('.buy-button')
const ALERT_BOX = document.querySelector(".alert-box");
const SIGN_UP_BUTTON = document.querySelector('.sign-up-button');
const LOGIN_BUTTON = document.querySelector('.login-button');
const SEARCH_FORM_SUBMIT_BUTTON = document.querySelector('.search-form__submit-button');
const AUTH_FORM_SUBMIT_BUTTONS = document.querySelectorAll('.auth-form__button');
const MODAL_PROFILE_USER_STAT_VISITS = document.querySelector('.modal-profile__user-stat-visits');
const MODAL_PROFILE_USER_STAT_BONUSES = document.querySelector('.modal-profile__user-stat-bonuses');
const MODAL_PROFILE_USER_STAT_BOOKS = document.querySelector('.modal-profile__user-stat-books');
const HEADER_INITIALS_BUTTON_CONTAINER = document.querySelector('.header__initials-button');
const HEADER_INITIALS_BUTTON = HEADER_INITIALS_BUTTON_CONTAINER.querySelector('.initials-button');
const HEADER_BURGER_BUTTON = document.querySelector('.header__burger-button .burger-button');
const HEADER_BURGER_MENU_LINKS = document.querySelectorAll('.header__burger-menu .burger-menu .burger-menu__item');
const HEADER_BURGER_MENU = document.querySelector('.header__burger-menu');
const HEADER_PROFILE_BUTTON = document.querySelector('.header__profile-button .profile-button');
const HEADER_PROFILE_BUTTON_CONTAINER = document.querySelector('.header__profile-button');
const HEADER_PROFILE_MENU_CONTAINER = document.querySelector('.header__profile-menu');
const HEADER_PROFILE_MENU_LIST = HEADER_PROFILE_MENU_CONTAINER.querySelector('.profile-menu__list');
const HEADER_PROFILE_MENU_TITLE = HEADER_PROFILE_MENU_CONTAINER.querySelector('.profile-menu__title');
const HEADER_PROFILE_MENU_BUTTONS = document.querySelectorAll('.profile-menu__item');
const HEADER_PROFILE_MENU_REG_BUTTON = document.querySelector('.profile-menu__reg-button');
const HEADER_PROFILE_MENU_PROFILE_BUTTON = document.querySelector('.profile-menu__profile-button');
const HEADER_MODAL_OVERLAY = document.querySelector('.header__modal-overlay');
const HEADER_REG_FORM = document.querySelector('.header__reg-form');
const HEADER_REG_FORM_SUBMIT_BUTTON = HEADER_REG_FORM.querySelector("button[type='submit']");
const HEADER_REG_FORM_CLOSE_BUTTON = document.querySelector('.header__reg-form .modal-close-button');
const HEADER_LOGIN_FORM = document.querySelector('.header__login-form');
const HEADER_LOGIN_FORM_CLOSE_BUTTON = document.querySelector('.header__login-form .modal-close-button');
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
function disableButtons(buttons) {
  buttons.forEach((button) => button.disabled = true);
}
function enableButtons(buttons) {
  buttons.forEach((button) => button.disabled = false);
}
function disableButton(button) {
  button.disabled = true;
}
function enableButton(button) {
  button.disabled = false;
}

function closeAuthForm(form, overlay) {
  removeActive(form);
  addActive(overlay);
  removeActive(overlay);
}

function handleOutsideMenuClick(menu, ...buttons) {
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    let isMenuOrButton = false;
    if (menu.contains(targetElement)) {
      isMenuOrButton = true;
    } else {
      for (const button of buttons) {
        if (button.contains(targetElement)) {
          isMenuOrButton = true;
          break;
        }
      }
    }
    if (!isMenuOrButton) {
      removeActive(menu);
      for (const button of buttons) {
        removeActive(button);
      }
    }
  });
}
handleOutsideMenuClick(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleOutsideMenuClick(HEADER_PROFILE_MENU_CONTAINER, HEADER_PROFILE_BUTTON, HEADER_INITIALS_BUTTON);

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
handleOutsideFormClick(HEADER_MODAL_PROFILE, SHADOW_OVERLAY);
handleOutsideFormClick(HEADER_MODAL_BUY_CARD, SHADOW_OVERLAY);


function handleAnyMenuItemClick (menu, button, items) {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      removeActive(menu);
      removeActive(button);
    });
  });
}
handleAnyMenuItemClick (HEADER_BURGER_MENU, HEADER_BURGER_BUTTON, HEADER_BURGER_MENU_LINKS);
handleAnyMenuItemClick (HEADER_PROFILE_MENU_CONTAINER, HEADER_PROFILE_BUTTON, HEADER_PROFILE_MENU_BUTTONS);

function handleMenuToggle(menu, button) {
  button.addEventListener('click', () => {
    toggleActive(menu);
    toggleActive(button);
  });
}
handleMenuToggle(HEADER_BURGER_MENU, HEADER_BURGER_BUTTON);
handleMenuToggle(HEADER_PROFILE_MENU_CONTAINER, HEADER_PROFILE_BUTTON);
handleMenuToggle(HEADER_PROFILE_MENU_CONTAINER, HEADER_INITIALS_BUTTON);

const openRegForm = () => {
  addActive(HEADER_REG_FORM);
  addActive(SHADOW_OVERLAY);
  removeInactive(SHADOW_OVERLAY);
}
const openLoginForm = () => {
  addActive(HEADER_LOGIN_FORM);
  addActive(SHADOW_OVERLAY);
  removeInactive(SHADOW_OVERLAY);
}
const openProfile = () => {
  addActive(HEADER_MODAL_PROFILE)
  addActive(SHADOW_OVERLAY);
  removeInactive(SHADOW_OVERLAY);
}
const openBuyCardForm = () => {
  addActive(HEADER_MODAL_BUY_CARD)
  addActive(SHADOW_OVERLAY);
  removeInactive(SHADOW_OVERLAY);
}

HEADER_PROFILE_MENU_BUTTONS[0].addEventListener('click', openLoginForm);
HEADER_PROFILE_MENU_BUTTONS[1].addEventListener('click', openRegForm);
LOGIN_BUTTON.addEventListener('click', openLoginForm);
SIGN_UP_BUTTON.addEventListener('click', openRegForm);
BUY_BUTTONS.forEach((button) => {
  button.addEventListener('click', openLoginForm);
});

function handleFormClose (form, overlay) {
  form.querySelector('.modal-close-button').addEventListener('click', () => {
    removeActive(form);
    removeActive(overlay);
    addInactive(overlay);
  });
}
handleFormClose(HEADER_LOGIN_FORM, SHADOW_OVERLAY);
handleFormClose(HEADER_REG_FORM, SHADOW_OVERLAY);
handleFormClose(HEADER_MODAL_PROFILE, SHADOW_OVERLAY);
handleFormClose(HEADER_MODAL_BUY_CARD, SHADOW_OVERLAY);

function handleFormSwap (currentForm, changeButton, targetForm) {
  changeButton.addEventListener('click', () => {
    removeActive(currentForm);
    addActive(targetForm);
  });
}
handleFormSwap(HEADER_LOGIN_FORM, HEADER_LOGIN_FORM_REG_BUTTON, HEADER_REG_FORM);
handleFormSwap(HEADER_REG_FORM, HEADER_REG_FORM_LOGIN_BUTTON, HEADER_LOGIN_FORM);

function handleFormSubmit(form, handleValidSubmit) {
  const submitButton = form.querySelector("button[type='submit']");
  submitButton.addEventListener('click', event => {
    event.preventDefault();
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const formObj = Object.fromEntries(formData.entries());
      handleValidSubmit(formObj, submitButton);
}
    else {
      form.reportValidity();
    }
  });
}
function handleValidRegistrationSubmit(formUserRegistration, submitButton) {
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (registeredUsers.find(user => user.email === formUserRegistration.email)) {
      displayAlert("This email address is already in use.", submitButton);
      return;
    }
    displayAlert("Your account has been successfully registered.", submitButton);
    formUserRegistration.loginCount = 1;
    formUserRegistration.cardNumber = getUniqueCardNumber(registeredUsers);
    registeredUsers.push(formUserRegistration);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    closeAuthForm(HEADER_REG_FORM, SHADOW_OVERLAY);
    updatePageForAuthorizedUser(formUserRegistration);
}
handleFormSubmit(HEADER_REG_FORM, handleValidRegistrationSubmit);
handleFormSubmit(HEADER_LOGIN_FORM, handleValidLoginSubmit);


function handleValidLoginSubmit(formUserLogin, submitButton) {
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if (registeredUsers.find(user => user.regPassword === formUserLogin.loginPassword && (user.cardNumber === formUserLogin.emailOrCardNumber || user.email === formUserLogin.emailOrCardNumber ))) {
      displayAlert("You are logged in", submitButton);
      closeAuthForm(HEADER_LOGIN_FORM, SHADOW_OVERLAY);
      let loggedUser = getUserByEmailOrCardNumber(formUserLogin.emailOrCardNumber, registeredUsers);
      loggedUser.loginCount++;
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      updatePageForAuthorizedUser(loggedUser);
      return;
    }
    displayAlert("Wrong password or email", submitButton);
    return;
}


const getUserByEmailOrCardNumber = (emailOrCardNumber, registeredUsers) => {
  for (let i = 0; i < registeredUsers.length; i++) {
    const user = registeredUsers[i];
    if (user.email === emailOrCardNumber || user.cardNumber === emailOrCardNumber) {
      return user;
    }
  }
  return null;
};

function updatePageForAuthorizedUser(loggedUser) {
  addInactive(HEADER_PROFILE_BUTTON_CONTAINER);
  addActive(HEADER_INITIALS_BUTTON_CONTAINER);
  enableButton(SEARCH_FORM_SUBMIT_BUTTON);
  addTitleToElement(HEADER_INITIALS_BUTTON, loggedUser.firstName + ' ' + loggedUser.secondName);
  updateTextInElement(HEADER_INITIALS_BUTTON, (loggedUser.firstName.charAt(0) + loggedUser.secondName.charAt(0)).toUpperCase());
  updateTextInElement(HEADER_PROFILE_MENU_TITLE, loggedUser.cardNumber);
  updateTextInElement(MODAL_PROFILE_USER_STAT_VISITS, loggedUser.loginCount);
  updateTextInListItemsAnchors(HEADER_PROFILE_MENU_LIST, ['Profile', 'Log Out']);
  HEADER_PROFILE_MENU_BUTTONS[0].removeEventListener('click', openLoginForm);
  HEADER_PROFILE_MENU_BUTTONS[1].removeEventListener('click', openRegForm);
  HEADER_PROFILE_MENU_BUTTONS[0].addEventListener('click', openProfile);
  HEADER_PROFILE_MENU_BUTTONS[1].addEventListener('click', updatePageForUnauthorizedUser);
  BUY_BUTTONS.forEach((button) => {
    button.removeEventListener('click', openLoginForm);
  });
  BUY_BUTTONS.forEach((button) => {
    button.addEventListener('click', openBuyCardForm);
  });

}

function updatePageForUnauthorizedUser() {
  removeInactive(HEADER_PROFILE_BUTTON_CONTAINER);
  removeActive(HEADER_INITIALS_BUTTON_CONTAINER);
  updateTextInElement(HEADER_INITIALS_BUTTON, '');
  updateTextInElement(HEADER_PROFILE_MENU_TITLE, 'Profile');
  updateTextInListItemsAnchors(HEADER_PROFILE_MENU_LIST, ['Log In', 'Registration']);
  removeTitleFromElement(HEADER_INITIALS_BUTTON);
  disableButton(SEARCH_FORM_SUBMIT_BUTTON);
  HEADER_PROFILE_MENU_BUTTONS[0].removeEventListener('click', openProfile);
  HEADER_PROFILE_MENU_BUTTONS[1].removeEventListener('click', updatePageForUnauthorizedUser);
  HEADER_PROFILE_MENU_BUTTONS[0].addEventListener('click', openLoginForm);
  HEADER_PROFILE_MENU_BUTTONS[1].addEventListener('click', openRegForm);
  BUY_BUTTONS.forEach((button) => {
    button.removeEventListener('click', openBuyCardForm);
  });
  BUY_BUTTONS.forEach((button) => {
    button.addEventListener('click', openLoginForm);
  });
}


function updateTextInListItemsAnchors(ulElement, newText) {
  const listItemElements = ulElement.querySelectorAll('li');
  listItemElements.forEach((liElement, index) => {
    if (index < listItemElements.length) {
      const anchorElement = liElement.querySelector('a');
      anchorElement.textContent = newText[index];
    }
  });
}
function updateTextInElement(element, text) {
  element.innerText = text;
}
function addTitleToElement(element, titleString) {
  element.setAttribute('title', titleString);
}
function removeTitleFromElement(element) {
  element.removeAttribute('title');
}
function getUniqueCardNumber(registeredUsers) {
  const usedCardNumbers = new Set(registeredUsers.map(registeredUser => registeredUser.cardNumber));
  let cardNumber;
  do {
    cardNumber = Math.floor(Math.random() * 0x1000000000).toString(16).padStart(9, '0');
  } while (usedCardNumbers.has(cardNumber));
  return cardNumber;
}
function displayAlert(message, button) {
  ALERT_BOX.innerText = message;
  disableButton(button);
  addActive(ALERT_BOX);
  setTimeout(() => {
    addInactive(ALERT_BOX);
    setTimeout(() => {
      removeActive(ALERT_BOX);
      removeInactive(ALERT_BOX);
      enableButton(button);
    }, 1100);
  }, 1000);
}



















































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
    const slideWidth = IMAGES_SLIDER_SLIDE.offsetWidth + parseInt((window.getComputedStyle(IMAGES_SLIDER_SLIDES_CONTAINER).columnGap), 10);
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
