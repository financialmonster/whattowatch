import { all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { watchPromo } from 'domains/promo/saga/promoWatchers';
import { watchFilms } from 'domains/films/saga/filmsWatchers';
import { watchAuth } from 'domains/auth/saga/authWatchers';

export function* rootSaga(): SagaIterator {
    yield all([call( watchPromo ), call( watchFilms ), call( watchAuth )]);
}
