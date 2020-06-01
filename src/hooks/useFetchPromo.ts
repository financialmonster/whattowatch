import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as promoSelectors from 'domains/promo/promoSelectors';
import { promoActions } from 'domains/promo/promoActions';

export const useFetchPromo = () => {
    const dispatch = useDispatch();
    const promo = useSelector(promoSelectors.getPromo);

    useEffect(() => {
        dispatch(promoActions.fetchPromoRequest());
    }, [dispatch]);

    const isPromoFetching = useSelector(promoSelectors.getIsPromoFetching);
    const promoError = useSelector(promoSelectors.getPromoError);

    return {
        isPromoFetching,
        promoError,
        promo
    };
}
