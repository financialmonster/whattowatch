import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { authActions } from 'domains/auth/authActions';
import { HttpStatusCodes } from 'mainConstants';
import { TFetchAuthRequest } from 'domains/auth/authTypes';
import { TUser } from 'types';

export function* workFetchAuth(action: TFetchAuthRequest): SagaIterator {
    try {
        const response: Response = yield call(api.auth.fetchAuth, action.payload);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`Can't sign in`);
        }

        const user: TUser = yield call([response, response.json]);

        yield put(authActions.fetchAuthSuccess(user));
    } catch(err) {
        yield put(authActions.fetchAuthFail(err));
    }
}
