import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filmsActions } from 'domains/films/filmsActions';
import * as filmsSelectors from 'domains/films/filmsSelectors';

export const useGenreFilter = () => {
    const filter = useSelector(filmsSelectors.getFilter);
    const dispatch = useDispatch();

    const genreItemClickHander = useCallback((genre: string): void => {        
        dispatch(filmsActions.setFilter(genre));
    }, [dispatch]);

    return {
        filter,
        genreItemClickHander
    };
}
