import { useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';

export const useFilmsPagePush = (id?: number) => {
    const dispatch = useDispatch();

    const pushToFilmPage = useCallback(() => {
        dispatch(push(`${process.env.PUBLIC_URL}/film/${id}`));
    }, [dispatch, id]);

    return pushToFilmPage;
}
