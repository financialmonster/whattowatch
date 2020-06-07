import React, { FC, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import * as authSelectors from 'domains/auth/authSelectors';
import { Routes } from 'mainConstants';
import { LoginFormContainer } from 'components/loginFormContainer/LoginFormContainer';
import { Message } from 'components/message/Message';
import { authActions } from 'domains/auth/authActions';

export const LoginPage: FC = () => {
    const user = useSelector(authSelectors.getUser);
    const authError = useSelector(authSelectors.getAuthError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.resetAuthError());
    }, [dispatch]);

    if(user) {
        return <Redirect to={`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`} />;
    }

    return (
        <div className="user-page">
            <Header />
            {(authError) &&
                <Message>
                    {(authError as Error).message}
                </Message>
            }
            {(!authError) &&
                <LoginFormContainer />
            }
            <Footer />
        </div>
    );
}
