import loadMovieCards from './movies/movie-cards-component.js';
import makeSearchUrl from './movies/movie-cards-component.js';
import loadSearch from './movies/search-component.js';

loadSearch(searchOptions => {
    const url = makeSearchUrl(searchOptions);

    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovieCards(response.results);
        });
});