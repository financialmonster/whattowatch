import React, { FC } from 'react';

import { Header } from 'components/header/Header';
import { PromoContainer } from 'components/promoContainer/PromoContainer';
import { FilmsListContainer } from 'components/filmsListContainer/FilmsListContainer';
import { GenreFilter } from 'components/genreFilter/GenreFilter';
import { Footer } from 'components/footer/Footer';

export const MainPage: FC = () => {
    return (
        <>
            <section className="movie-card">
                <div className="movie-card__bg">
                    <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
                </div>
                <h1 className="visually-hidden">WTW</h1>
                <Header />
                <PromoContainer />
            </section>
            <div className="page-content">
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
