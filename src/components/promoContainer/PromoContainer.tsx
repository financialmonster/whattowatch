import React, { FC } from 'react';

import Promo from '../promo/Promo';
import { useFetchPromo } from '../../hooks/useFetchPromo';

const PromoContainer: FC = () => {
    const {isPromoFetching, promoError, promo} = useFetchPromo();

    if(isPromoFetching) {
        return <div>loading...</div>;
    }

    if(promoError) {
        return <div>error</div>;
    }

    return <Promo promo={promo} />;
}

export default PromoContainer;
