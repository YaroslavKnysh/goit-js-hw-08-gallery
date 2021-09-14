import galleryItems from './galleryItems.js';

const listEl = document.querySelector('.js-gallery');
const buttonEl = document.querySelector('button[data-action="close-lightbox"]');
const lightboxEl = document.querySelector('.lightbox');
const lightboxOverlayEl = document.querySelector('.lightbox__overlay');
const lightboxContentEl = document.querySelector('.lightbox__content');
const largeImage = document.querySelector('.lightbox__image');

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
  console.log(e);
  largeImage.src = e.target.dataset.source;
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
