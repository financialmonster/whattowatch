import React, { FC } from 'react';
import { Map } from 'immutable';

import { Promo } from 'components/promo/Promo';
import { Spinner } from 'components/spinner/Spinner';
import { useFetchPromo } from 'hooks/useFetchPromo';
import { Message } from 'components/message/Message';

export const PromoContainer: FC = () => {
    const {isPromoFetching, promoError, promo} = useFetchPromo();
    const verifiedPromo = promo as Map<string, any>;

    if(isPromoFetching) {
        return <Spinner />;
    }

    if(promoError) {
        return (
            <Message>
                {(promoError as Error).message}
            </Message>
        );
    }

    return <Promo promo={verifiedPromo} />;
}
