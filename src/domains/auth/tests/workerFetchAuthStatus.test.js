import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { authActions } from 'domains/auth/authActions';
import api from 'api';
import { workFetchAuthStatus } from 'domains/auth/saga/workerFetchAuthStatus';
import { HttpStatusCodes } from 'mainConstants';

describe(`WorkFetchAuthStatus:`, () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        await expectSaga(workFetchAuthStatus)
            .provide([[ call(api.auth.fetchAuthStatus), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: jest.fn(() => Promise.resolve({alsoFake: true}))
            } ]])
            .put(authActions.fetchAuthStatusSuccess({alsoFake: true}))
            .run();
    });

    it(`should properly handle request scenario with response code 401`, async () => {
        await expectSaga(workFetchAuthStatus)
            .provide([[ call(api.auth.fetchAuthStatus), {
                status: HttpStatusCodes.UNAUTHORIZED_STATUS_CODE
            } ]])
            .put(authActions.authStatusAnauthorized())
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200 and 401`, async () => {
        await expectSaga(workFetchAuthStatus)
            .provide([[ call(api.auth.fetchAuthStatus), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            } ]])
            .put(authActions.fetchAuthStatusFail(new Error(`Can't check auth status`)))
            .run();
    });
});
