import { List } from 'immutable';

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

export type TFilmsActions = TFetchFilmsRequest | TFetchFilmsSuccess | TFetchFilmsFail;

export type TFilmsState = {
    films: List<Map<string, any>>;
    isFilmsFetching: boolean;
    filmsError: null | Error
}
