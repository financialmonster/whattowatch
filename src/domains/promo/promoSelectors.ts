import { TState } from 'types';

const promoSelectors = {
    getIsPromoFetching: (state: TState) => state.promo.get(`isPromoFetching`),

    getPromoError: (state: TState) => state.promo.get(`promoError`),

    getPromo: (state: TState) => state.promo.get(`promo`)
}

export default promoSelectors;
