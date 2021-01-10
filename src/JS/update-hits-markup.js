import refs from './refs';
import imgTpl from '../templates/images.hbs';

function updateHitsMarkup(hits) {
  const markup = imgTpl(hits);
  refs.hitsContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateHitsMarkup;
