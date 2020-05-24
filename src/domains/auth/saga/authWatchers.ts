import { takeLatest, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { AuthActionTypes } from 'domains/auth/authConstants';
import { workFetchAuth } from './workerFetchAuth';
import { workFetchAuthStatus } from './workerFetchAuthStatus';

function* watchFetchAuth(): SagaIterator {
    yield takeLatest(AuthActionTypes.FETCH_AUTH_REQUEST, workFetchAuth);
}

function* watchFetchAuthStatus(): SagaIterator {
    yield takeLatest(AuthActionTypes.FETCH_AUTH_STATUS_REQUEST, workFetchAuthStatus);
}

export function* watchAuth(): SagaIterator {
    yield all([call(watchFetchAuth), call(watchFetchAuthStatus )]);
}
