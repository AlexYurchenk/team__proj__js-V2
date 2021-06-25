import collectionMovies from '../templates/filmCardTpl.hbs';
// импорт для показа фона, когда в списке нету фильмов

export default class markUpMoviesCollection {
    constructor({ selector }) {
        this.refs = this.getRefs(selector);
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.container = document.querySelector('.main__film-list');
        refs.firstButton = document.querySelector('[data-name="show__watched"]');
        refs.secondButton = document.querySelector('[data-name="show__queue"]');
        refs.bgEmptyCollection = document.querySelector('.bg__empty__collection');
        return refs;
    }

    fetchPersonsCollectionMovies(e) {
        const moviesCollection = e;

        moviesCollection.forEach(movie_id => {
            fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=44d74a10460e9a32f8546bed31d47780&language=en-US`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                })
                .then(res => {
                    const markUpCollection = collectionMovies([res]);
                    this.refs.container.insertAdjacentHTML('beforeend', markUpCollection);
                })
        })
    }

    // отрисовывает фон, когда в списке нету фильмов
    showBackgroundWithoutCollection(name) {
        const background = `<p class="bg__empty__collection">Sorry, but you haven't selected anything to ${name} yet</p>`;
        this.refs.container.insertAdjacentHTML('beforeend', background);
    }

    hideBackgroundWithoutCollection() {
        const background = document.querySelector('.bg__empty__collection');
        if (background === null) {
            return
        }
        background.remove();
    }
}