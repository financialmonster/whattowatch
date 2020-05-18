import { Map, fromJS } from 'immutable';

import promoReducer from 'domains/promo/promoReducer';
import { promoActions } from 'domains/promo/promoActions';

const initialState = Map({
    promo: Map(),
    isPromoFetching: true,
    promoError: null
});

describe(`promoReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(promoReducer(void 0, {})).toEqual(initialState);
    });

    it(`should return unchanged state given action with unknown type`, () => {
        expect(promoReducer(initialState, {type: `UNKNOWN`})).toEqual(initialState);
    });

    it(`should return right state given action with FETCH_PROMO_REQUEST type`, () => {
        const newState = initialState.set(`promoError`, null);

        expect(promoReducer(initialState, promoActions.fetchPromoRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_PROMO_SUCCESS type`, () => {
        const newState = initialState.set(`promo`, fromJS({fake: true}))
                                    .set(`isPromoFetching`, false);

        expect(promoReducer(initialState, promoActions.fetchPromoSuccess({fake: true}))).toEqual(newState);
    });

    it(`should return right state given action with FETCH_PROMO_FAIL type`, () => {
        const newState = initialState.set(`promo`, Map())
                                    .set(`isPromoFetching`, false)
                                    .set(`promoError`, { fake: true });

        expect(promoReducer(initialState, promoActions.fetchPromoFail({fake: true}))).toEqual(newState);
    });
});
