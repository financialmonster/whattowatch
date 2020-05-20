import { TState } from 'types';

export const getIsPromoFetching = (state: TState) => state.promo.get(`isPromoFetching`);

export const getPromoError = (state: TState) => state.promo.get(`promoError`);

export const getPromo = (state: TState) => state.promo.get(`promo`);
