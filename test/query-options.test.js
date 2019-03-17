import { writeOptionsAsQuery } from '../src/query-options.js';

const test = QUnit.test;
QUnit.module('write options to hash');

function readQueryAsOptions(query) {
    const searchParams = new URLSearchParams(query);
    const searchTerm = searchParams.get('searchTerm');
    const page = parseInt(searchParams.get('page'));

    const queryOptions = {
        search: { term: searchTerm || '' },
        paging: { page: page || 1 }
    };
    return queryOptions;
}

test('makes query search term', assert => {
    //arrange
    const searchOptions = { term: 'star wars' };
    //act
    const query = writeOptionsAsQuery(searchOptions);
    //assert
    assert.equal(query, '?searchTerm=star+wars');
});

test('makes query for search and paging', assert => {
    const searchOptions = { term: 'star wars' };
    const pagingOptions = { page: 1 };
    //act
    const query = writeOptionsAsQuery(searchOptions, pagingOptions);

    assert.equal(query, '?searchTerm=star+wars&page=1');

});

test('reads query with search term and page', assert => {
    //arrange
    const query = '?searchTerm=star+wars&page=1';
    const expected = {
        search: { term: 'star wars' },
        paging: { page: 1 }
    };
    //act
    const result = readQueryAsOptions(query);

    assert.deepEqual(result, expected);
});