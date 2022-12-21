import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`,
  '',
);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryClick);
 
// function createGalleryMarkup(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//         return `
//     <div class="gallery__item">
//         <a class="gallery__link"
//            href="${original}">
//             <img class="gallery__image" 
//                 src="${preview}"
//                 data-source="${original}" 
//                 alt="${description}" />
//         </a>
//     </div>`;
//     }).join('');
// };

function onGalleryClick(event) {
    event.preventDefault();
    const isImageSwatch = event.target.classList.contains('gallery__image');
    // if (event.target.nodeName !== 'IMG') {
    //    return
    //    }
    if (!isImageSwatch) { return };
    
    const getLargeImg = event.target.dataset.source;
    // const getLargeImg = event.target.getAttribute('data-source')

   const instance = basicLightbox.create(`
    <img width="1280" src="${getLargeImg}">
    `);

    instance.show();

    galleryContainer.addEventListener('keydown', event=> {
        if (event.code === "Escape") {
        instance.close()
        }
    });
};



// Розбір документації

// 1 Підключення
// 2 Ініціалізація екземпляру класу (обов'язково дивитись приклади в докі)
// 3 Розглянути методи які присутні на нашому екземплярі класу

// Плагін
// JavaScript (ES6) code snippets

// https://www.freecodecamp.org/ukrainian/
// https://www.codewars.com/dashboard
// https://js.coderslang.com/