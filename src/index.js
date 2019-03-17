import loadMovieCards from './movies/movie-cards-component.js';
import makeSearchAPIUrl from './movies/make-search-api-url.js';
import loadSearch, { updateSearchTerm } from './movies/search-component.js';
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

runSearchFromQuery();

window.addEventListener('hashchange', () => {
    runSearchFromQuery();
});

function runSearchFromQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);
    
    const url = makeSearchAPIUrl(queryOptions);
    
    updateSearchTerm(queryOptions.search);
    if(!url) {
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(response => {
            loadMovieCards(response.results);
        });
}