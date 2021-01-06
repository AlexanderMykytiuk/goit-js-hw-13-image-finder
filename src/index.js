import './styles.css';
import refs from './JS/refs';
import apiService from './JS/apiService';
import updateHitsMarkup from './JS/update-hits-markup';

refs.searchForm.addEventListener('submit', event => {
  // event.prevetDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.hitsContainer.innerHTML = '';
  form.reset();

  apiService(inputValue).then(updateHitsMarkup);
});



