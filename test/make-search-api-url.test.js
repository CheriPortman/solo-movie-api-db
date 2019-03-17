import makeSearchAPIUrl from '../src/movies/make-search-api-url.js';

const test = QUnit.test;
QUnit.module('make search url');

test('includes encoded search term', assert => {
    const queryOptions = {
        search: { term: 'star wars' }
    };

    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=869a081d5dda9c543281108989ab148e&language=en-US&query=star%20wars&page=1&include_adult=false';

    const result = makeSearchAPIUrl(queryOptions);

    assert.equal(result, expected);
});

test('return null if no search', assert => {
    const queryOptions = {
        search: { term: '' }
    };
    const resultUrl = makeSearchAPIUrl(queryOptions);

    assert.equal(resultUrl, '');
});