import { createSelector } from 'reselect';
import { List, Map, Set } from 'immutable';

import { TState } from 'types';
import { isFilms } from 'utils';

export const getIsFilmsFetching = (state: TState) => state.films.get(`isFilmsFetching`);

export const getFilmsError = (state: TState) => state.films.get(`filmsError`);

export const getFilms = (state: TState) => state.films.get(`films`);

export const selectGenres = createSelector(getFilms, (films) => {    
    if(isFilms(films)) {
        const genres = (films as List<Map<string, any>>)
                    .map((film) => film.get(`genre`))
                    .toSet()
                    .slice(0, 9)
                    .sort();

        return Set([`All genres`]).concat(genres);
    }
});

export const getFilter = (state: TState) => state.films.get(`filter`);

export const getFilm = (state: TState) => state.films.get(`film`);

export const selectFilmsByGenre = createSelector(getFilms, getFilter, (films, filter) => {
    if(isFilms(films)) {
        return (filter === `All genres`)
            ? films
            : (films as List<Map<string, any>>)
                    .filter((film) => film.get(`genre`) === filter);
    }
});

export const selectSimilarFilmsFactory = (film: Map<string, any>) => createSelector(getFilms, (films) => {
    if(isFilms(films)) {
        return (films as List<Map<string, any>>)
                .filter((el) => el.get(`genre`) === film.get(`genre`) && el !== film)
                .slice(0, 4);
    }
});
