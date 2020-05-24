import React, { FC } from 'react';

import { Spinner } from 'components/spinner/Spinner';
import { useFetchAuth } from 'hooks/useFetchAuth';
import { LoginForm } from 'components/loginForm/LoginForm';

export const LoginFormContainer: FC = () => {
    const {isAuthFetching, loginFormSubmitHandler} = useFetchAuth();

    if(isAuthFetching) {
        return <Spinner />;
    }

    return (
        <div className="sign-in user-page__content">
            <LoginForm loginFormSubmitHandler={loginFormSubmitHandler} />
        </div> 
    );
}
