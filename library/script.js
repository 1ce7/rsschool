const BURGER_BUTTON = document.querySelector('.burger-button');
const BURGER_MENU = document.querySelector('.burger-menu');
const BURGER_LINKS = document.querySelectorAll('.burger-menu__item');
const BOOK_CARD_BUTTONS = document.querySelectorAll('.book-card__button');
const BURGER_MENU_CONTAINER = document.querySelector('.burger-menu__container');
const IMAGES_SLIDER_SLIDES_CONTAINER= document.querySelector('.images-slider__slides');
const IMAGES_SLIDER_BUTTONS = document.querySelectorAll('.images-slider__radio-buttons input[name="image-slide"]');
const IMAGES_SLIDER_SLIDE = document.querySelector('.images-slider__slide');
const IMAGES_SLIDER_ARROW_LEFT = document.querySelector('#images-slider__arrow-left');
const IMAGES_SLIDER_ARROW_RIGHT = document.querySelector('#images-slider__arrow-right');
const BOOKS_SLIDER_SLIDES = document.querySelectorAll('.books-slider__slide');
const BOOKS_SLIDER_BUTTONS = document.querySelectorAll('.books-slider__radio-buttons input[name="books-slide"]');
const BOOKS_SLIDER_SLIDE = document.querySelector('.books-slider__slide');


BURGER_BUTTON.addEventListener('click', () => {
  toggleMenu();
});

BURGER_LINKS.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!BURGER_MENU_CONTAINER.contains(targetElement) && !BURGER_BUTTON.contains(targetElement)) {
    closeMenu();
  }
});

function toggleMenu() {
  BURGER_MENU_CONTAINER.classList.toggle('active');
  BURGER_BUTTON.classList.toggle('active');
}

function closeMenu() {
  BURGER_MENU_CONTAINER.classList.remove('active');
  BURGER_BUTTON.classList.remove('active');
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

// Применяем обработчик для каждой радиокнопки с помощью метода forEach
BOOKS_SLIDER_BUTTONS.forEach(radio => {
  radio.addEventListener('change', handleBooksSliderButtonChange);
});

