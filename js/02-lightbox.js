import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`,
  '',
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', { captionDelay: 250});

