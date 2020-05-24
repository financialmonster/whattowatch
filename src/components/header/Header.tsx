import React, { FC, ReactElement } from 'react';
import cn from 'classnames';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import * as authSelectors from 'domains/auth/authSelectors';
import { useLogoLinkClick } from 'hooks/useLogoLinkClick';
import { useSignInLinkClick } from 'hooks/useSignInLinkClick';
import { Routes } from 'mainConstants';

export const Header: FC = () => {
    const user = useSelector(authSelectors.getUser);
    const authStatusError = useSelector(authSelectors.getAuthStatusError);
    const isAuthStatusFetching = useSelector(authSelectors.getIsAuthStatusFetching);

    const { pathname } = useLocation();
    const isFilmPage = pathname === Routes.FILM_PAGE;
    const logoLinkClickHandler = useLogoLinkClick();
    const {signInLinkClickHandler, isLoginPage} = useSignInLinkClick();

    let avatar: string;

    let userBlockJSX: ReactElement = (
        <div className="user-block">
            <a className="user-block__link" onClick={signInLinkClickHandler} title="To the login page">
                Sign in
            </a>
        </div>
    );

    if(isAuthStatusFetching) {
        userBlockJSX = (
            <div className="user-block">
                Authorization...
            </div>
        );
    } else if(authStatusError) {
        userBlockJSX = (
            <div className="user-block">
                Authorization failed
            </div>
        );
    } else if(user) {
        avatar = (user as Map<string,any>).get(`avatar_url`);

        userBlockJSX = (
            <div className="user-block">
                <div className="user-block__avatar">
                    <img src={`https://htmlacademy-react-3.appspot.com/${avatar}`} alt="User avatar" width="63"
                        height="63"
                    />
                </div>
            </div>
        );
    }
    
    const headerClass = cn(`page-header`, {
        'user-page__head': isLoginPage,
        'movie-card__head': isFilmPage
    });

    return (
        <header className={headerClass}>
            <div className="logo">
                <a className="logo__link" onClick={logoLinkClickHandler}>
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                </a>
            </div>
            {
                (isLoginPage) ? <h1 className="page-title user-page__title">Sign in</h1> : userBlockJSX
            }
        </header>
    );
}
