import { put, call } from 'redux-saga/effects';

import { promoActions } from '../promoActions';
import api from '../../../api';
import { HttpStatusCodes } from '../../../constants';
import { TFilm } from '../../../types';
import { SagaIterator } from '@redux-saga/core';

export function* workFetchPromo(): SagaIterator {
    try {
        const response: Response = yield call(api.promo.fetchPromo);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`Can't receive the promo film`)
        }

        const film: TFilm = yield call([response, response.json]);

        yield put(promoActions.fetchPromoSuccess(film));
    } catch(err) {
        yield put(promoActions.fetchPromoFail(err));
    }
}
