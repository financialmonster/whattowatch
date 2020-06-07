import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Routes }  from 'mainConstants';
import { MainPage } from 'pages/mainPage/MainPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { FilmPage } from 'pages/filmPage/FilmPage';
import { ReviewPage } from 'pages/reviewPage/ReviewPage';
import { FavoritesPage } from 'pages/favoritesPage/FavoritesPage';
import { useFetchAuthStatus } from 'hooks/useFetchAuthStatus';

export const App: FC = () => {
    useFetchAuthStatus();

    return (
        <>
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} component={MainPage} exact />
                <Route path={`${process.env.PUBLIC_URL}${Routes.LOGIN_PAGE}`} component={LoginPage} exact />
                <Route path={`${process.env.PUBLIC_URL}${Routes.FILM_PAGE}`} component={FilmPage} exact />
                <Route path={`${process.env.PUBLIC_URL}${Routes.REVIEW_PAGE}`} component={ReviewPage} exact />
                <Route path={`${process.env.PUBLIC_URL}${Routes.FAVORITES_PAGE}`} component={FavoritesPage} exact />
                <Redirect to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} />
            </Switch>
        </>
    );
}
