const PLACE_HOLDER = '../../assets/movie-night.jpg';

export function makeMovieCard(movie) {
    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
        : PLACE_HOLDER;
    const html = /*html*/`
        <li class="movie">
            <h2 class="movie-title">${movie.original_title}</h2>
            <img src="${poster}" 
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

const movieList = document.getElementById('movie-list');

export default function loadMovieCards(movies) {
    clearMovies();
    movies.forEach(movie => {
        const dom = makeMovieCard(movie);
        movieList.appendChild(dom);
    });
}

function clearMovies() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}