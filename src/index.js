import loadMovieCards, { updateMovies } from './movies/movie-cards-component.js';
import { updateSearchTerm } from './movies/search-component.js';
import { updatePagingInfo } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './movies/make-search-movie-url.js';
import loadMovies from './movies/movie-cards-component.js';

loadMovies(movie => {
    console.log('would show detail for:', movie);
});

const prompt = document.getElementById('prompt');
const moviesContainer = document.getElementById('movie-list-container');

window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchMovieUrl(queryOptions);
    
    if(!url) {
        return;
    } 
    else {
        prompt.classList.add('hidden');
        moviesContainer.classList.remove('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            updateMovies(body.results);
            const pagingInfo = {
                page: body.page,
                totalPages: body.total_pages
            };
            updatePagingInfo(pagingInfo);
        });
}