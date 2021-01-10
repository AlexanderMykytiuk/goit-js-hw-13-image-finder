import './styles.scss';
import refs from './JS/refs';
import apiService from './JS/api-service';
import updateHitsMarkup from './JS/update-hits-markup';
import toastr from './JS/toastr';
import openModal from './JS/open-modal';
// require('bootstrap');


refs.searchForm.addEventListener('submit', event => {
  // event.prevetDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.hitsContainer.innerHTML = '';

  apiService.resetPage();
  fetchHits();
  form.reset();
  
});

refs.buttonLoadMore.addEventListener('click', fetchHits);

function fetchHits() {
  refs.buttonLoadMore.classList.add('is-hidden');
  refs.spinner.classList.remove('is-hidden');

  apiService
    .fetchHits()
    .then(hits => {
      if (hits.length > 0) {
        updateHitsMarkup(hits);
        refs.buttonLoadMore.classList.remove('is-hidden');

        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
      } else if (hits.length === 0) {
        toastr.error('Please enter the correct value!', 'Inconceivable!');
      }
    })
    .finally(() => {
      refs.spinner.classList.add('is-hidden');
    });
}
