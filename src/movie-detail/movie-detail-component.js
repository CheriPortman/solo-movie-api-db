export function makeMovieDetail(movie) {
    const html = /*html*/`
        <article>
            <img src="https://image.tmdb.org/t/p/w300/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg">
            <h2>Star Wars</h2>
            <p class="description">Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.</p>
        </article>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}