import { TState } from 'types';

const filmsSelectors = {
    getIsFilmsFetching: (state: TState) => state.films.get(`isFilmsFetching`),

    getFilmsError: (state: TState) => state.films.get(`filmsError`),

    getFilms: (state: TState) => state.films.get(`films`)
}

export default filmsSelectors;
