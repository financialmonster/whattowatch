import { Map } from 'immutable';

import { FilmsActionTypes }  from './filmsConstants';
import { TFilmsActions } from './filmsTypes';
import { TFilms } from 'types';

export const filmsActions = {
    fetchFilmsRequest: (): TFilmsActions => ({ type: FilmsActionTypes.FETCH_FILMS_REQUEST }),

    fetchFilmsSuccess: (films: TFilms): TFilmsActions => ({
        type: FilmsActionTypes.FETCH_FILMS_SUCCESS,
        payload: films
    }),

    fetchFilmsFail: (error: Error): TFilmsActions => ({
        type: FilmsActionTypes.FETCH_FILMS_FAIL,
        error: true,
        payload: error
    }),

    setFilter: (filter: string): TFilmsActions => ({
        type: FilmsActionTypes.SET_FILTER,
        payload: filter
    }),

    setFilm: (film: Map<string, any>): TFilmsActions => ({
        type: FilmsActionTypes.SET_FILM,
        payload: film
    })
}
