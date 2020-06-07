import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { filmsActions } from 'domains/films/filmsActions';
import { HttpStatusCodes } from 'mainConstants';
import { TFilms } from 'types';

export function* workFetchFilms(): SagaIterator {
    try {
        const response: Response = yield call(api.films.fetchFilms);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`We are sorry. List of films can't be loaded now. Please, reload the page.`);
        }

        const films: TFilms = yield call([response, response.json]);

        yield put(filmsActions.fetchFilmsSuccess(films));
    } catch(err) {
        yield put(filmsActions.fetchFilmsFail(err));
    }
}
