import { Map } from 'immutable';

import { PromoActionTypes } from './promoConstants';
import { TFilm } from 'types';

type TFetchPromoRequest = {
    type: typeof PromoActionTypes.FETCH_PROMO_REQUEST
}

type TFetchPromoSuccess = {
    type: typeof PromoActionTypes.FETCH_PROMO_SUCCESS,
    payload: TFilm
}

type TFetchPromoFail = {
    type: typeof PromoActionTypes.FETCH_PROMO_FAIL,
    error: boolean,
    payload: Error
}

export type TPromoActions = TFetchPromoRequest | TFetchPromoSuccess | TFetchPromoFail;

export type TPromoState = {
    promo: Map<string, any>;
    isPromoFetching: boolean;
    promoError: null | Error;
}
