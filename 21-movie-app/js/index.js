import { API_URL, IMG_PATH, SEARCH_API } from './api.js';
import { $form, $search } from './dom.js';

const fetchMovies = async url => {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data.results);
};

const getClassByRate = vote => {
  if (vote >= 8) return 'green';
  if (vote >= 5) return 'orange';
  return 'red';
};
const observer = () => {
  const options = {
    root: null,
    threshold: 0.1,
  };
  return new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector('img');
        img.src = img.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  }, options);
};

const displayMovies = movies => {
  main.replaceChildren();
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    observer().observe(movieEl);
    movieEl.innerHTML = /*html*/ `
            <img data-src="${IMG_PATH + poster_path}" alt="${title}" />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;
    main.appendChild(movieEl);
  });
};

const setEvent = () => {
  $form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = $search.value;

    if (searchTerm && searchTerm !== '') {
      fetchMovies(SEARCH_API + searchTerm);
      $search.value = '';
      return;
    }

    window.location.reload();
  });
};

const init = () => {
  fetchMovies(API_URL);
  setEvent();
};

init();
