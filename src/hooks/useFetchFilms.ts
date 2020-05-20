import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filmsActions } from 'domains/films/filmsActions';
import filmsSelectors from 'domains/films/filmsSelectors';

export const useFetchFilms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filmsActions.fetchFilmsRequest());
    }, [dispatch]);

    const films = useSelector(filmsSelectors.getFilms);
    const filmsError = useSelector(filmsSelectors.getFilmsError);
    const isFilmsFetching = useSelector(filmsSelectors.getIsFilmsFetching);

    return {
        isFilmsFetching,
        filmsError,
        films
    };
}
