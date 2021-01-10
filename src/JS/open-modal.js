import refs from './refs';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

refs.hitsContainer.addEventListener('click', openModal);
function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imgTarg = event.target;
  const largeImg = imgTarg.dataset.source;
  const instance = basicLightbox.create(`<img src=${largeImg}>`);
  instance.show();
}
