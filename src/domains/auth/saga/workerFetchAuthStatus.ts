import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { authActions } from 'domains/auth/authActions';
import { HttpStatusCodes } from 'mainConstants';
import { TUser } from 'types';

export function* workFetchAuthStatus(): SagaIterator {
    try {
        const response: Response = yield call(api.auth.fetchAuthStatus);

        if(response.status === HttpStatusCodes.SUCCESS_STATUS_CODE) {
            const user: TUser = yield call([response, response.json]);

            yield put(authActions.fetchAuthStatusSuccess(user));
        } else if (response.status === HttpStatusCodes.UNAUTHORIZED_STATUS_CODE) {
            yield put(authActions.authStatusAnauthorized());
        } else {
            throw new Error(`Authorization failed. Please, reload the page.`);
        }
    } catch (err) {
        yield put(authActions.fetchAuthStatusFail(err));
    }
}
