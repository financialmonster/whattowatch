import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import * as authSelectors from 'domains/auth/authSelectors';
import { useLogoLinkClick } from 'hooks/useLogoLinkClick';

export const Header: FC= () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const logoLinkClickHandler = useLogoLinkClick();

    let userBlockJSX: ReactElement;
    
    if(isLoggedIn) {
        userBlockJSX = (
            <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
        );
    } else {
        userBlockJSX = <a className="user-block__link" href="sign-in.html">Sign in</a>;
    }

    return (
        <header className="page-header">
            <div className="logo">
                <a className="logo__link" onClick={logoLinkClickHandler}>
                    <span className="logo__letter logo__letter--1">W</span>
                    <span className="logo__letter logo__letter--2">T</span>
                    <span className="logo__letter logo__letter--3">W</span>
                </a>
            </div>
            <div className="user-block">
                { userBlockJSX }
            </div>
        </header>
    );
}
