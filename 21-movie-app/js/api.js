/**
 * [TMDB]
 * movie api reference - https://www.themoviedb.org
 * getting start - https://developers.themoviedb.org/3/getting-started/introduction
 * how to use - https://www.themoviedb.org/documentation/api/discover
 */

const API_KEY = '4e0eac1dd1e5bcfa25dfaf252e3b4305';

export const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
export const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;