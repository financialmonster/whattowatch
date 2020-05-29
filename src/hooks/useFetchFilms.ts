import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filmsActions } from 'domains/films/filmsActions';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { isFilms } from 'utils';

export const useFetchFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector(filmsSelectors.getFilms);

    useEffect(() => {
        if(!isFilms(films)) {
            dispatch(filmsActions.fetchFilmsRequest());
        }
    }, [dispatch, films]);

    const filmsError = useSelector(filmsSelectors.getFilmsError);
    const isFilmsFetching = useSelector(filmsSelectors.getIsFilmsFetching);

    return {
        isFilmsFetching,
        filmsError,
        films
    };
}
