import { all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { watchPromo } from 'domains/promo/saga/watchers';

export function* rootSaga(): SagaIterator {
    yield all([call( watchPromo )]);
}
