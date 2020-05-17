import { takeEvery, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { PromoActionTypes } from '../promoConstants';
import { workFetchPromo } from './workerFetchPromo';

function* watchFetchPromo(): SagaIterator {
    yield takeEvery(PromoActionTypes.FETCH_PROMO_REQUEST, workFetchPromo);
}

export function* watchPromo(): SagaIterator {
    yield all([call( watchFetchPromo )]);
}
