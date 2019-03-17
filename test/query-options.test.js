import { writeOptionsAsQuery, readQueryAsOptions } from '../src/query-options.js';

const test = QUnit.test;
QUnit.module('query options');

test('writes query search term', assert => {
    //arrange
    const queryOptions = { 
        search: { term: 'star wars' }
    };
    //act
    const query = writeOptionsAsQuery(queryOptions);
    //assert
    assert.equal(query, '?searchTerm=star+wars');
});

test('writes query for search and paging', assert => {
    const queryOptions = {
        search: { term: 'star wars' },
        paging: { page: 1 }
    };
    // const searchOptions = { term: 'star wars' };
    // const pagingOptions = { page: 1 };
    //act
    const query = writeOptionsAsQuery(queryOptions);

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

test('reads query with search term with no page', assert => {
    const query = '?searchTerm=star+wars';
    
    const expected = {
        search: { term: 'star wars' },
        paging: { page: 1 }
    };
    
    const result = readQueryAsOptions(query);
    assert.deepEqual(result, expected);
    
});

test('reads empty query', assert => {
    const query = '';
    
    const expected = {
        search: { term: '' },
        paging: { page: 1 }
    };
    const result = readQueryAsOptions(query);
    assert.deepEqual(result, expected);
});