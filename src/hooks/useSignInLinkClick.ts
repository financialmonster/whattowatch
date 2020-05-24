import { useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Routes } from 'mainConstants';

export const useSignInLinkClick = () => {
    const { pathname } = useLocation();

    const isLoginPage = pathname === Routes.LOGIN_PAGE;
    const dispatch = useDispatch();

    const signInLinkClickHandler = useCallback((): void => {
        if (!isLoginPage) {
            dispatch(push(Routes.LOGIN_PAGE));
        }
    }, [isLoginPage, dispatch]);

    return {
        signInLinkClickHandler,
        isLoginPage
    };
}
