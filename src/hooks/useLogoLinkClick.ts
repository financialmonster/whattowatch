import { useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Routes } from 'mainConstants';

export const useLogoLinkClick = () => {
    const {pathname} = useLocation();

    const isMain = pathname === `${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`;
    const dispatch = useDispatch();

    const logoLinkClickHandler = useCallback((): void => {
        if(!isMain) {
            dispatch(push(`${process.env.PUBLIC_URL}${Routes.MAIN_PAGE}`));
        }
    }, [isMain, dispatch]);

    return logoLinkClickHandler;
}
