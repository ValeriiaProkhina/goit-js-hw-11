import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// refresh() Бібліотека містить метод [refresh()](https://github.com/andreknieriem/simplelightbox#public-methods), який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
const searchForm = document.querySelector('.search-form');
const btnRef = document.querySelector('.btn-search');
const inputRef = document.querySelector('.input-search');
const galleryRef = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '41747369-46a857856bf510ac3748d6666';

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.currentTarget.elements.query.value;
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        close: true,
      });

      galleryRef.innerHTML = images.hits.reduce(
        (html, img) =>
          html +
          `<li><a href='${img.largeImageURL}'></a><img src='${img.webformatURL}' /></li>`,
        ''
      );
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        message: error.message,
        position: 'topRight',
      })
    );
});
