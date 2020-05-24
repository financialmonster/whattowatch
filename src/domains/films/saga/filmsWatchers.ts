import { takeLatest, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { FilmsActionTypes } from 'domains/films/filmsConstants';
import { workFetchFilms } from './workerFetchFilms';

function* watchFetchFilms(): SagaIterator {
    yield takeLatest(FilmsActionTypes.FETCH_FILMS_REQUEST, workFetchFilms);
}

export function* watchFilms(): SagaIterator {
    yield all([call( watchFetchFilms )]);
}
