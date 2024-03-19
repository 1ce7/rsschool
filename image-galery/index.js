const searchForm = document.querySelector('.header__search-form');
const searchFormSubmitBtn = document.querySelector('.submit-btn');
const searchFormInput = document.querySelector('.search-form-input');
const imageContainer = document.querySelector('.image-container');
const searchFormClearBtn = document.querySelector('.clear-btn');

const accessKey = '5070fNg5WQoNPGDJBESJLZYw5wJy_4uc46_A1elBwCE';

window.addEventListener('DOMContentLoaded', () => {
  searchFormInput.focus();
});
searchFormClearBtn.addEventListener('click', () => {
  searchFormInput.value = '';
  searchFormInput.focus();
});

async function fetchImages(query, isRandom = false) {
  let url;
  const imageCount = 6;
  try {
    if (!isRandom) {
      url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${encodeURIComponent(accessKey)}&per_page=${imageCount}`;
    } else {
      url = `https://api.unsplash.com/photos/random?client_id=${encodeURIComponent(accessKey)}&count=${imageCount}`
    }
    const response = await fetch(url);
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
async function renderImageContainer(images) {
  if (images && images.length > 0) {
    imageContainer.innerHTML = '';
    images.forEach((item) => {
      const imageBox = document.createElement('div');
      const image = document.createElement('img');
      imageBox.classList.add('image-box');
      image.classList.add('image');
      image.src = item.urls.regular;
      image.alt = item.alt_description;
      imageBox.appendChild(image);
      imageContainer.appendChild(imageBox);
    });
  }
}

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const fetchedImages = await fetchImages(searchFormInput.value.trim());
  renderImageContainer(fetchedImages);
});
window.addEventListener('load', async () => {
  const fetchedImages = await fetchImages('', true);
  renderImageContainer(fetchedImages);
});
