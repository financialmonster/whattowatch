import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';

import { Routes } from '../../constants';
import authSelectors from '../../domains/auth/authSelectors';

const Header = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    const logoLinkClickHandler = useCallback((): void => {
        if(path !== Routes.MAIN_PAGE) {
            dispatch(push(Routes.MAIN_PAGE));
        }
    }, [path, dispatch]);

    let userBlockJSX;
    
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

export default React.memo(Header);
