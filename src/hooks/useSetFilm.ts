import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map } from 'immutable';

import { filmsActions } from 'domains/films/filmsActions';
import * as filmsSelectors from 'domains/films/filmsSelectors';

export const useSetFilm = (film: Map<string, any>) => {
    const dispatch = useDispatch();
    const currentFilm = useSelector(filmsSelectors.getFilm);

    useEffect(() => {
        if(!currentFilm || (currentFilm as Map<string, any>).get(`id`) !== film.get(`id`)) {
            dispatch(filmsActions.setFilm(film));
        }
    }, [dispatch, film, currentFilm]);
} 
