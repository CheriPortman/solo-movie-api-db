

const test = QUnit.test;
QUnit.module('write options to hash');

function writeOptionsAsQuery(searchOptions) {
    if(!searchOptions.term) {
        return '';
    }

    const searchParams = new URLSearchParams();
    searchParams.set('searchTerm', searchOptions.term);

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