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

const displayMovies = movies => {
    main.replaceChildren();
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = /*html*/ `
            <img src="${IMG_PATH + poster_path}" alt="${title}" />
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