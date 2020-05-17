import { PromoActionTypes } from './promoConstants';
import { TPromoActions } from './promoTypes';
import { TFilm } from '../../types';

export const promoActions = {
    fetchPromoRequest: (): TPromoActions => ({ type: PromoActionTypes.FETCH_PROMO_REQUEST }),

    fetchPromoSuccess: (promo: TFilm): TPromoActions =>({
        type: PromoActionTypes.FETCH_PROMO_SUCCESS,
        payload: promo
    }),
    
    fetchPromoFail: (error: Error): TPromoActions => ({
        type: PromoActionTypes.FETCH_PROMO_FAIL,
        error: true,
        payload: error
    })
}
