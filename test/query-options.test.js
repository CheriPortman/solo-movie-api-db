import { writeOptionsAsQuery } from '../src/query-options.js';

const test = QUnit.test;
QUnit.module('write options to hash');

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