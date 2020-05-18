import React, { FC } from 'react';

import Promo from 'components/promo/Promo';
import Spinner from 'components/spinner/Spinner';
import { useFetchPromo } from 'hooks/useFetchPromo';

const PromoContainer: FC = () => {
    const {isPromoFetching, promoError, promo} = useFetchPromo();

    if(isPromoFetching) {
        return <Spinner />;
    }

    if(promoError) {
        return <div>error</div>;
    }

    return <Promo promo={promo} />;
}

export default PromoContainer;
