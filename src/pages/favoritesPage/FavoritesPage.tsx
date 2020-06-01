import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as authSelectors from 'domains/auth/authSelectors';
import { Routes } from 'mainConstants';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { FavoritesFilmsContainer } from 'components/favoritesFilmsContainer/FavoritesFilmsContainer';

export const FavoritesPage: FC = () => {
    const user = useSelector(authSelectors.getUser);

    if(!user) {
        return <Redirect to={Routes.LOGIN_PAGE} />;
    }

    return (
        <div className="user-page">
            <Header />
            <section className="catalog">
                <h2 className="catalog__title visually-hidden">Catalog</h2>
                <FavoritesFilmsContainer />
            </section>
            <Footer />
        </div>
    );
}
