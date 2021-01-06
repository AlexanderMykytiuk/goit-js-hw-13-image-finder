export default {
    inputValue: "",
    page: 1,
fetchHits() {
    const apiKey = '19774505-07ddfa2894064c6483641677e';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
     return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => hits)
      .catch(error => console.log(error));
  }


}

