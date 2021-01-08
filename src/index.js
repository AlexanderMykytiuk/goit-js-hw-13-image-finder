import './styles.css';
import refs from './JS/refs';
import apiService from './JS/api-service';
import updateHitsMarkup from './JS/update-hits-markup';
import toastr from './JS/toastr';
require('bootstrap');
import * as basicLightbox from 'basiclightbox';

refs.searchForm.addEventListener('submit', event => {
  // event.prevetDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.hitsContainer.innerHTML = '';
  
  apiService.resetPage();

  apiService.fetchHits().then(updateHitsMarkup);
  form.reset();
});

refs.buttonLoadMore.addEventListener('click', () => {
  apiService.fetchHits().then(updateHitsMarkup);
})


