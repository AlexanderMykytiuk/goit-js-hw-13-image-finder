import refs from './refs';

const loadMoreBtn = {
    enable() {
      refs.buttonLoadMore.disabled = false;
      refs.labelBtn.textContent = 'Show more...';
      refs.spinner.classList.add('spinner--hidden');
    },
    disable() {
      refs.buttonLoadMore.disabled = true;
      refs.labelBtn.textContent = 'Loading...';
      refs.spinner.classList.remove('spinner--hidden');
    },
    show() {
      refs.buttonLoadMore.classList.remove('is-hidden')
    },
};

export default loadMoreBtn;