import React from 'react';

import Header from 'components/header/Header';
import PromoContainer from 'components/promoContainer/PromoContainer';
import { FilmsListContainer } from 'components/filmsListContainer/FilmsListContainer';
import { GenreFilter } from 'components/genreFilter/GenreFilter';

const MainPage = () => {
    return (
        <div className="main">
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
            </div>
        </div>
    );
};

export default MainPage;
