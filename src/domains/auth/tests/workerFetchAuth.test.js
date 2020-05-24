import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { authActions } from 'domains/auth/authActions';
import api from 'api';
import { workFetchAuth } from 'domains/auth/saga/workerFetchAuth';
import { HttpStatusCodes } from 'mainConstants';

describe('WorkFetchAuth:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const action = {
            payload: `Fake`
        }

        await expectSaga(workFetchAuth, action)
            .provide([[ call(api.auth.fetchAuth, `Fake`), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: jest.fn(() => Promise.resolve({alsoFake: true}))
            }]])
            .put(authActions.fetchAuthSuccess({alsoFake: true}))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200`, async () => {
        const action = {
            payload: `Fake`
        }
        
        await expectSaga(workFetchAuth, action)
            .provide([[ call(api.auth.fetchAuth, `Fake`), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(authActions.fetchAuthFail(new Error(`Can't sign in`)))
            .run();
    });
});
