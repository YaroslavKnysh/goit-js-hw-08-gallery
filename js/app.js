import galleryItems from './galleryItems.js';
import {
  listEl,
  buttonEl,
  lightboxEl,
  lightboxOverlayEl,
  lightboxContentEl,
  largeImage,
} from './variables.js';

// const listEl = document.querySelector('.js-gallery');
// const buttonEl = document.querySelector('button[data-action="close-lightbox"]');
// const lightboxEl = document.querySelector('.lightbox');
// const lightboxOverlayEl = document.querySelector('.lightbox__overlay');
// const lightboxContentEl = document.querySelector('.lightbox__content');
// const largeImage = document.querySelector('.lightbox__image');

const itemEl = ({ preview, original, description }) => {
  return `<li class="gallery__item"><a
    class="gallery__link"
    href="${original}"
  ><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`;
};

const addListElement = galleryItems.map(itemEl).join('');
// console.log(addListElement);

listEl.insertAdjacentHTML('beforeend', addListElement);

listEl.addEventListener('click', openModal);

function openModal(e) {
  e.preventDefault();
  lightboxEl.classList.add('is-open');
  largeImage.src = e.target.dataset.source;
  largeImage.alt = e.target.alt;
}

buttonEl.addEventListener('click', closeModal);

function closeModal() {
  lightboxEl.classList.remove('is-open');
  largeImage.src = '';
}

window.addEventListener('keydown', closeModalOnEscapePress);

function closeModalOnEscapePress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

lightboxOverlayEl.addEventListener('click', closeModal);

// lightboxOverlayEl.addEventListener('click', onOverlayClick);

// function onOverlayClick(e) {
//   if (e.currentTarget === e.target) {
//     closeModal();
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

window.addEventListener('keydown', slidePicture);

function slidePicture(e) {
  let nextIndex = 0;
  const currentIndex = galleryItems.indexOf(
    galleryItems.find(item => item.description === largeImage.alt),
  );
  console.log(e);
  if (e.key == 'ArrowRight') {
    nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
  }
  if (e.key == 'ArrowLeft') {
    nextIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
  }

  largeImage.src = galleryItems[nextIndex].original;
  largeImage.alt = galleryItems[nextIndex].description;
}
