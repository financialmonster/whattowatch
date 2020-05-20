import { createSelector } from 'reselect';
import { List, Map } from 'immutable'

import { TState } from 'types';
import { isFilms } from 'utils';

export const getIsFilmsFetching = (state: TState) => state.films.get(`isFilmsFetching`);

export const getFilmsError = (state: TState) => state.films.get(`filmsError`);

export const getFilms = (state: TState) => state.films.get(`films`);

export const selectGenres = createSelector(getFilms, (films) => {    
    if(isFilms(films)) {
        return (films as List<Map<string, any>>)
                    .map((film) => film.get(`genre`))
                    .toSet()
                    .slice(0, 9)
                    .sort();
    }
});

export const getFilter = (state: TState) => state.films.get(`filter`);
