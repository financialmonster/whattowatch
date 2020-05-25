import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Map } from 'immutable';

import { Header } from 'components/header/Header';
import { PromoContainer } from 'components/promoContainer/PromoContainer';
import { FilmsListContainer } from 'components/filmsListContainer/FilmsListContainer';
import { GenreFilter } from 'components/genreFilter/GenreFilter';
import { Footer } from 'components/footer/Footer';
import * as promoSelectors from 'domains/promo/promoSelectors';

export const MainPage: FC = () => {
    const promo = useSelector(promoSelectors.getPromo);
    let divStyle = {};    

    if(promo) {
        const backgroundColor: string = (promo as Map<string, any>).get(`background_color`);

        divStyle = { backgroundImage: `linear-gradient(-180deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`}
    }

    return (
        <>
            <section className="movie-card">
                <Header />
                <PromoContainer />
            </section>
            <div className="page-content" style={ divStyle }>
                <section className="catalog">
                    <h2 className="catalog__title visually-hidden">Catalog</h2>
                    <GenreFilter />
                    <FilmsListContainer />
                </section>
                <Footer />
            </div>
        </>
    );
};
