import loadMovieCards from './movies/movie-cards-component.js';
import makeSearchAPIUrl from './movies/make-search-api-url.js';
import loadSearch from './movies/search-component.js';
import { writeOptionsAsQuery, readQueryAsOptions } from './query-options.js';


let searchOptions = null;

loadSearch(newSearchOptions => {
    searchOptions = newSearchOptions;
    const queryOptions = {
        search: searchOptions
    };

    const query = writeOptionsAsQuery(queryOptions);
    window.location.hash = query;

});

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);

    const url = makeSearchAPIUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovieCards(response.results);
        });
});
