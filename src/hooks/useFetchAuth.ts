import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authActions } from 'domains/auth/authActions';
import * as authSelectors from 'domains/auth/authSelectors';
import { TUserData } from 'types';

export const useFetchAuth = () => {
    const dispatch = useDispatch();

    const loginFormSubmitHandler = useCallback((userData: TUserData): void => {
        const {email, password} = userData;

        dispatch(authActions.fetchAuthRequest({
            email,
            password
        }));
    }, [dispatch]);

    const user = useSelector(authSelectors.getUser);
    const authError = useSelector(authSelectors.getAuthError);
    const isAuthFetching = useSelector(authSelectors.getIsAuthFetching);

    return {
        isAuthFetching,
        authError,
        user,
        loginFormSubmitHandler
    };
}
