import { Map, fromJS } from 'immutable';

import { TPromoState, TPromoActions } from './promoTypes';
import { PromoActionTypes } from './promoConstants';

const initialState: TPromoState = {
    promo: Map(),
    isPromoFetching: true,
    promoError: null
}

const initialStateImmutable = Map(initialState);

const promoReducer = (state = initialStateImmutable, action: TPromoActions): typeof initialStateImmutable => {
    switch(action.type) {
        case PromoActionTypes.FETCH_PROMO_REQUEST:
            return state.set(`promoError`, null);

        case PromoActionTypes.FETCH_PROMO_SUCCESS:
            return state.set(`promo`, fromJS(action.payload))
                        .set(`isPromoFetching`, false);

        case PromoActionTypes.FETCH_PROMO_FAIL:
            return state.set(`promo`, Map())
                        .set(`isPromoFetching`, false)
                        .set(`promoError`, action.payload);

        default:
            // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
            const x: never = action;
    }

    return state;
}

export default promoReducer;
