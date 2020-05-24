import { useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Routes } from 'mainConstants';

export const useLogoLinkClick = () => {
    const {pathname} = useLocation();

    const isMain = pathname === Routes.MAIN_PAGE;
    const dispatch = useDispatch();

    const logoLinkClickHandler = useCallback((): void => {
        if(!isMain) {
            dispatch(push(Routes.MAIN_PAGE));
        }
    }, [isMain, dispatch]);

    return logoLinkClickHandler;
}
