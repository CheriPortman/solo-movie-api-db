const API_KEY = '869a081d5dda9c543281108989ab148e';

export default function makeSearchAPIURL(searchOptions) {
    const query = encodeURIComponent(searchOptions.term);
    const page = 1;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
    return url;
}


