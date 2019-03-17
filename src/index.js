import loadMovieCards from './movies/movie-cards-component.js';
// import loadPaging, { updatePagingInfo } from './paging-component.js';
// import makeSearchAPIUrl from './movies/make-search-api-url.js';
// import loadSearch, { updateSearchTerm } from './movies/search-component.js';
// import { writeOptionsAsQuery, readQueryAsOptions } from './query-options.js';

// let queryOptions = null;

// loadSearch(searchOptions => {
//     queryOptions.search = searchOptions;
//     queryOptions.paging = { page: 1 };
//     writeQueryOptionsToHash();
// });

// loadPaging(pagingOptions => {
//     queryOptions.paging = pagingOptions;
//     writeQueryOptionsToHash();
// });

// function writeQueryOptionsToHash() {
//     const query = writeOptionsAsQuery(queryOptions);
//     window.location.hash = query;
// }

// //run on load!
// runSearchFromQuery();

// window.addEventListener('hashchange', () => {
//     runSearchFromQuery();
// });


// function runSearchFromQuery() {
//     const query = window.location.hash.slice(1);
//     queryOptions = readQueryAsOptions(query);
    
//     updateSearchTerm(queryOptions.search);
//     const url = makeSearchAPIUrl(queryOptions);

//     if(!url) {
//         return;
//         //TODO: clear movies component
//     }

//     fetch(url)
//         .then(response => response.json())
//         .then(response => {
//             loadMovieCards(response.results);
//             const pagingInfo = {
//                 page: response.page,
//                 totalPages: response.total_pages,
//             };
//             updatePagingInfo(pagingInfo);
//         });
// }