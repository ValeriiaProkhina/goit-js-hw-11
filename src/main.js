import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// refresh() Бібліотека містить метод [refresh()](https://github.com/andreknieriem/simplelightbox#public-methods), який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
const searchForm = document.querySelector('.search-form');
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
  renderImages(searchParams);
  searchForm.reset();
});

const getImages = searchParams => {
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
  });
};

const getImagesHTML = images =>
  images.hits.reduce(
    (html, img) =>
      html +
      `<li class="img-item">
  <a class="img-link" href="${img.largeImageURL}">
    <img
      class="images"
      src="${img.webformatURL}"
      data-source="${img.largeImageURL}"
      alt="${img.tags}"
      width="360"
      height="200"
  /></a>
<div class="description">
  <div>
    <p><b>Likes</b></p>
    <p>${img.likes}</p>
  </div>
  <div>
    <p><b>Views</b></p>
    <p>${img.views}</p>
  </div>
  <div>
    <p><b>Comments</b></p>
    <p>${img.comments}</p>
  </div>
  <div>
    <p><b>Downloads</b></p>
    <p>${img.downloads}</p>
  </div>
</div>
</li>`,
    ''
  );

function renderImages(searchParams) {
  getImages(searchParams)
    .then(images => {
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        close: true,
      });

      galleryRef.insertAdjacentHTML('afterbegin', getImagesHTML(images));

      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        message: error.message,
        position: 'topRight',
      })
    );
}
