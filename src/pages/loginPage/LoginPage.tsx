import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import * as authSelectors from 'domains/auth/authSelectors';
import { Routes } from 'mainConstants';
import { LoginFormContainer } from 'components/loginFormContainer/LoginFormContainer';

export const LoginPage: FC = () => {
    const user = useSelector(authSelectors.getUser);

    if(user) {
        return <Redirect to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} />;
    }

    return (
        <div className="user-page">
            <Header />
            <LoginFormContainer />
            <Footer />
        </div>
    );
}
