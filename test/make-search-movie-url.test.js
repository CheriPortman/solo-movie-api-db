import makeSearchMovieUrl from '../src/movies/make-search-movie-url.js';

const test = QUnit.test;
QUnit.module('make search movie url');

test('includes query and page', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'star wars',
        page: 3
    };
    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=869a081d5dda9c543281108989ab148e&language=en-us&include_adult=false&query=star+wars&page=3';
    const url = makeSearchMovieUrl(queryOptions);
    //act
    assert.equal(url, expected);
});

test('returns empty url if no searchTerm', assert => {
    //arrange
    const queryOptions = {
        searchTerm: '',
        page: 1
    };
    const expected = '';
    //act
    const url = makeSearchMovieUrl(queryOptions);
    assert.equal(url, expected);
});