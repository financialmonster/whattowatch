import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as promoSelectors from 'domains/promo/promoSelectors';
import { promoActions } from 'domains/promo/promoActions';

export const useFetchPromo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(promoActions.fetchPromoRequest());        
    }, [dispatch]);

    const isPromoFetching = useSelector(promoSelectors.getIsPromoFetching);
    const promoError = useSelector(promoSelectors.getPromoError);
    const promo = useSelector(promoSelectors.getPromo);

    return {
        isPromoFetching,
        promoError,
        promo
    };
}
