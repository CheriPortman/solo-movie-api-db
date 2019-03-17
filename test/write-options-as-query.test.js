

const test = QUnit.test;
QUnit.module('write options to hash');

function writeOptionsAsQuery(searchOptions, pagingOptions) {
    if(!searchOptions.term) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);
    if(pagingOptions) {
        searchParams.set('page', pagingOptions.page);
    }

    return '?' + searchParams.toString();
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