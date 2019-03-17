const test = QUnit.test;

QUnit.module('makeMovieCard component:');

function makeMovieCard() {
    const html = /*html*/`
        <li class="movie" title="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground &quot;fight clubs&quot; forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.">
            <p class="genre">Drama</p>
            <h2 class="movie-title">Fight Club</h2>
            <img src="https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" alt="poster of Fight Club">
            <span class="tagline">Mischief. Mayhem. Soap.</span>
            <span class="year">1999</span>
            <span class="runtime">139 minutes</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('write a test', assert => {
    //arrange
    const expected = /*html*/`
        <li class="movie" title="A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground &quot;fight clubs&quot; forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.">
            <p class="genre">Drama</p>
            <h2 class="movie-title">Fight Club</h2>
            <img src="https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" alt="poster of Fight Club">
            <span class="tagline">Mischief. Mayhem. Soap.</span>
            <span class="year">1999</span>
            <span class="runtime">139 minutes</span>
        </li>
    `;

    const movie = {
        'genres': [
            {
                'id': 18,
                'name': 'Drama'
            }
        ],
        'id': 550,
        'imdb_id': 'tt0137523',
        'original_title': 'Fight Club',
        'overview': 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
        'poster_path': '/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        'release_date': '1999-10-15',
        'runtime': 139,
        'tagline': 'Mischief. Mayhem. Soap.',
        'title': 'Fight Club'
    };

    //act
    const result = makeMovieCard();
    //assert
    assert.htmlEqual(result, expected);
});