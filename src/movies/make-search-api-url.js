const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '869a081d5dda9c543281108989ab148e';

const url = new URL(SEARCH_MOVIE_URL);
url.searchParams.set('api_key', API_KEY);
url.searchParams.set('language', 'en-us');
url.searchParams.set('include_adult', false);

export default function makeSearchAPIUrl(queryOptions) {
    const searchOptions = queryOptions.search;
    const searchTerm = searchOptions.term;
    if(!searchTerm) return '';

    url.searchParams.set('query', searchOptions.term);
    const pagingOptions = queryOptions.paging;

    const page = pagingOptions ? pagingOptions.page : 1;
    url.searchParams.set('page', page);

    return url.toString();
}


