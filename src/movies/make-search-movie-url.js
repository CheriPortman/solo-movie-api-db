const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '869a081d5dda9c543281108989ab148e';

export default function makeSearchMovieUrl(queryOptions) {
    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }

    const url = new URL(SEARCH_MOVIE_URL);
    url.searchParams.set('api_key', API_KEY);
    url.searchParams.set('language', 'en-us');
    url.searchParams.set('include_adult', false);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}

