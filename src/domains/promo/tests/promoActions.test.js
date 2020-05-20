import { promoActions } from 'domains/promo/promoActions';
import { PromoActionTypes } from 'domains/promo/promoConstants';

describe(`promo actions:`, () => {
    it(`fetchPromoRequest should return the right value`, () => {
        expect(promoActions.fetchPromoRequest()).toEqual({
            type: PromoActionTypes.FETCH_PROMO_REQUEST
        });
    });

    it(`fetchPromoSuccess should return the right value`, () => {
        expect(promoActions.fetchPromoSuccess({fake: true})).toEqual({
            type: PromoActionTypes.FETCH_PROMO_SUCCESS,
            payload: {fake: true}
        });
    });

    it(`fetchPromoFail should return the right value`, () => {
        expect(promoActions.fetchPromoFail({error: true})).toEqual({
            type: PromoActionTypes.FETCH_PROMO_FAIL,
            error: true,
            payload: {error: true}
        });
    });
});
