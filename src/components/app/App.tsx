import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Routes }  from 'mainConstants';
import { MainPage } from 'pages/mainPage/MainPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { FilmPage } from 'pages/filmPage/FilmPage';
import { useFetchAuthStatus } from 'hooks/useFetchAuthStatus';

export const App: FC = () => {
    useFetchAuthStatus();

    return (
        <Switch>
            <Route path={Routes.MAIN_PAGE} component={MainPage} exact />
            <Route path={Routes.LOGIN_PAGE} component={LoginPage} exact />
            <Route path={`${Routes.FILM_PAGE}/:id`} component={FilmPage} exact />
            <Redirect to={Routes.MAIN_PAGE} />
        </Switch>
    );
}
