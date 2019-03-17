import loadMovieCards from '../movies/movie-cards-component.js';

const API_KEY = '869a081d5dda9c543281108989ab148e';
const query = encodeURIComponent('Honeymoon');
const page = 1;
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

fetch(URL)
    .then(response => response.json())
    .then(response => {
        loadMovieCards(response.results);
    });