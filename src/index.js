import './styles.scss';
import refs from './JS/refs';
import apiService from './JS/api-service';
import updateHitsMarkup from './JS/update-hits-markup';
import toastr from './JS/toastr';
import loadMoreBtn from './JS/load-more-btn';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearHitsContainer();
  apiService.resetPage();
  fetchHits();
  form.reset();
});

refs.buttonLoadMore.addEventListener('click', fetchHits);


function fetchHits() {

  loadMoreBtn.disable();

  apiService.fetchHits().then(hits => {
    if (hits.length > 0) {
      updateHitsMarkup(hits);
      loadMoreBtn.show();
      loadMoreBtn.enable();

      window.scrollTo({
        top: 10000000,
        behavior: 'smooth',
      });
    } else if (hits.length === 0) {
      toastr.error('Please enter the correct value!', 'Inconceivable!');
    }
  });
}

function clearHitsContainer() {
  refs.hitsContainer.innerHTML = '';
}
