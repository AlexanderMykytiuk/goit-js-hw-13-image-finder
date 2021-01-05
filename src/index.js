import './styles.css';
import refs from './JS/refs';
import img from './templates/images.hbs';


const key = '19774505-07ddfa2894064c6483641677e';
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=yellow+flower&page=1&per_page=12&key=${key}`;

fetch(`${url}`)
  .then(response => response.json())
//   .then(deta => deta.webformatURL)
  .catch(error => console.log(error));

function updateMarkup(articles) {
  const markup = img(articles);
  refs.listItems.insertAdjacentHTML('beforeend', markup);
//   console.log(articles);
}

updateMarkup()

