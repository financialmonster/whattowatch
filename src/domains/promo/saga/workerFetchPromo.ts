import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { promoActions } from 'domains/promo/promoActions';
import api from 'api';
import { HttpStatusCodes } from 'mainConstants';
import { TFilm } from 'types';

export function* workFetchPromo(): SagaIterator {
    try {
        const response: Response = yield call(api.promo.fetchPromo);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`We are sorry. Promo film can't be loaded now. Please, reload the page.`)
        }

        const film: TFilm = yield call([response, response.json]);

        yield put(promoActions.fetchPromoSuccess(film));
    } catch(err) {
        yield put(promoActions.fetchPromoFail(err));
    }
}
