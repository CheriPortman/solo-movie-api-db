import movie from '../data/example-data.js';
const test = QUnit.test;

QUnit.module('makeMovieCard component:');

function makeMovieCard(movie) {

    const html = /*html*/`
        <li class="movie">
            <h2 class="movie-title">${movie.original_title}</h2>
            <img src="https://image.tmdb.org/t/p/w92${movie.poster_path}" 
                alt="poster of ${movie.original_title}">
            <span class="tagline">${movie.tagline}</span>
            <span class="year">${movie.release_date.split('-')[0]}</span>
            <span class="runtime">${movie.runtime} minutes</span>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('write a test', assert => {
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