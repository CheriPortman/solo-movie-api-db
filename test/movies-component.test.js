import movie from '../data/example-data.js';
import { makeMovieCard } from '../movies/movie-cards-component.js';

const test = QUnit.test;

QUnit.module('makeMovieCard component:');

test('makeMovieCard', assert => {
    //arrange
    const expected = /*html*/`
        <li class="movie">
            <h2 class="movie-title">Fight Club</h2>
            <img src="https://image.tmdb.org/t/p/w92/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" alt="poster of Fight Club">
            <span class="tagline">Mischief. Mayhem. Soap.</span>
            <span class="year">1999</span>
            <span class="runtime">139 minutes</span>
        </li>
    `;
    //act
    const result = makeMovieCard(movie);
    //assert
    assert.htmlEqual(result, expected);
});
