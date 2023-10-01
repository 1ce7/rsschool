const searchForm = document.querySelector('.header__search-form');
const searchFormBtn = document.querySelector('.search-form-btn');
const searchFormInput = document.querySelector('.search-form-input');
const imageContainer = document.querySelector('.image-container');

const accessKey = '5070fNg5WQoNPGDJBESJLZYw5wJy_4uc46_A1elBwCE';

// window.addEventListener('load', () => {
//   fetchResults('', true);
// });

async function fetchResults(query, isRandom = false) {
  let url;
  const imageCount = 6;
  const width = 800; // Ширина требуемого разрешения
  const height = 600; // Высота требуемого разрешения
  try {
    if (!isRandom) {
      url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${encodeURIComponent(accessKey)}&per_page=${imageCount}&w=${width}&h=${height}`;
    } else {
      url = `https://api.unsplash.com/photos/random?client_id=${encodeURIComponent(accessKey)}&count=${imageCount}`
    }
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
      throw new Error('Request failed with status: ' + response.status);
    }
    const data = await response.json();
    console.log(isRandom? data : data.results)
    return isRandom? data : data.results;
  } catch (error) {
    console.error('Error searching Unsplash:', error);
    throw error;
  }
}

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  let images = await fetchResults(searchFormInput.value.trim());
  imageContainer.innerHTML = '';
  // Проходимся по каждому изображению и создаем элемент <img> для отображения
  images.forEach((item) => {
    const imageBox = document.createElement('div');
    const image = document.createElement('img');
    imageBox.classList.add('image-box');
    image.classList.add('image');
    image.src = item.urls.regular; // Устанавливаем источник изображения на URL из полученных данных
    image.alt = item.alt_description; // Устанавливаем альтернативный текст для изображения
    imageBox.appendChild(image);
    imageContainer.appendChild(imageBox); // Добавляем элемент <img> в контейнер на странице
  });
});
