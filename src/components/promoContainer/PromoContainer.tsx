import React, { FC } from 'react';
import { Map } from 'immutable';

import Promo from 'components/promo/Promo';
import Spinner from 'components/spinner/Spinner';
import { useFetchPromo } from 'hooks/useFetchPromo';

const PromoContainer: FC = () => {
    const {isPromoFetching, promoError, promo} = useFetchPromo();
    const verifiedPromo = promo as Map<string, any>;

    if(isPromoFetching) {
        return <Spinner />;
    }

    if(promoError) {
        return <div>error</div>;
    }

    return <Promo promo={verifiedPromo} />;
}

export default PromoContainer;
