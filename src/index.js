import loadMovieCards from './movies/movie-cards-component.js';
import makeSearchAPIUrl from './movies/make-search-api-url.js';
import loadSearch from './movies/search-component.js';

loadSearch(searchOptions => {
    const url = makeSearchAPIUrl(searchOptions);

    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovieCards(response.results);
        });
});