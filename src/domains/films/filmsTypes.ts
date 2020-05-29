import { List, Map } from 'immutable';

import { TFilms } from 'types';
import { FilmsActionTypes } from './filmsConstants';

type TFetchFilmsRequest = {
    type: typeof FilmsActionTypes.FETCH_FILMS_REQUEST
}

type TFetchFilmsSuccess = {
    type: typeof FilmsActionTypes.FETCH_FILMS_SUCCESS,
    payload: TFilms
}

type TFetchFilmsFail = {
    type: typeof FilmsActionTypes.FETCH_FILMS_FAIL,
    error: boolean,
    payload: Error
}

type TSetFilter = {
    type: typeof FilmsActionTypes.SET_FILTER,
    payload: string
}

type TSetFilm = {
    type: typeof FilmsActionTypes.SET_FILM,
    payload: Map<string, any>
}

export type TFilmsActions = TFetchFilmsRequest | TFetchFilmsSuccess | TFetchFilmsFail | TSetFilter | TSetFilm;

export type TFilmsState = {
    films: List<Map<string, any>>;
    isFilmsFetching: boolean;
    filmsError: null | Error;
    filter: string,
    film: Map<string, any> | null
}
