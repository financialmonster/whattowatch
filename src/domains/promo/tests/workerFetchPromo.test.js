import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { promoActions } from 'domains/promo/promoActions';
import api from 'api';
import { workFetchPromo } from 'domains/promo/saga/workerFetchPromo';
import { HttpStatusCodes } from 'mainConstants';

describe('workFetchPromo:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        await expectSaga(workFetchPromo)
            .provide([[ call(api.promo.fetchPromo), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: jest.fn(() => Promise.resolve({fake: true}))
            }]])
            .put(promoActions.fetchPromoSuccess({fake: true}))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200`, async () => {
        await expectSaga(workFetchPromo)
            .provide([[ call(api.promo.fetchPromo), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(promoActions.fetchPromoFail(new Error(
                `We are sorry. Promo film can't be loaded now. Please, reload the page.`
            )))
            .run();
    });
});
