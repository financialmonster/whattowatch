import { promoActions } from '../promoActions';
import { PromoActionTypes } from '../promoConstants';

describe(`promo actions:`, () => {
    it(`fetchPromoRequest should return the right velue`, () => {
        expect(promoActions.fetchPromoRequest()).toEqual({
            type: PromoActionTypes.FETCH_PROMO_REQUEST
        });
    });

    it(`fetchPromoSuccess should return the right velue`, () => {
        expect(promoActions.fetchPromoSuccess({fake: true})).toEqual({
            type: PromoActionTypes.FETCH_PROMO_SUCCESS,
            payload: {fake: true}
        });
    });

    it(`fetchPromoFail should return the right velue`, () => {
        expect(promoActions.fetchPromoFail({error: true})).toEqual({
            type: PromoActionTypes.FETCH_PROMO_FAIL,
            error: true,
            payload: {error: true}
        });
    });
});
