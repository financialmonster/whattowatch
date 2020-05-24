import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from 'domains/auth/authActions';

export const useFetchAuthStatus = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.fetchAuthStatusRequest());
    }, [dispatch]);
}
