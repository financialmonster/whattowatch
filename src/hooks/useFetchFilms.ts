import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filmsActions } from 'domains/films/filmsActions';
import * as filmsSelectors from 'domains/films/filmsSelectors';

export const useFetchFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector(filmsSelectors.getFilms);

    useEffect(() => {
        dispatch(filmsActions.fetchFilmsRequest());
    }, [dispatch]);

    const filmsError = useSelector(filmsSelectors.getFilmsError);
    const isFilmsFetching = useSelector(filmsSelectors.getIsFilmsFetching);

    return {
        isFilmsFetching,
        filmsError,
        films
    };
}
