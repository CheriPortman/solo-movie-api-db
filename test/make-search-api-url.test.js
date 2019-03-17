import makeSearchAPIUrl from '../src/movies/make-search-api-url.js';

const test = QUnit.test;
QUnit.module('make search url');

test('includes encoded search term, defaults to page 1', assert => {
    const queryOptions = {
        search: { term: 'star wars' }
    };

    const expected = 'https://api.themoviedb.org/3/search/movie?api_key=869a081d5dda9c543281108989ab148e&language=en-us&include_adult=false&query=star+wars&page=1';

    const result = makeSearchAPIUrl(queryOptions);

    assert.equal(result, expected);
});

test('includes encoded search term and page', assert => {
    const queryOptions = {
        search: { term: '' },
        page: { page: 3 }
    };
    const resultUrl = makeSearchAPIUrl(queryOptions);

    assert.equal(resultUrl, '');
});