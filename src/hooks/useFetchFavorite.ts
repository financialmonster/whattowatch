import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map } from 'immutable';

import { favoritesActions } from 'domains/favorites/favoritesActions';
import * as favoritesSelectors from 'domains/favorites/favoritesSelectors';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { isFilms } from 'utils';

export const useFetchFavorite = (favorite: number | Map<string, any>) => {
    const dispatch = useDispatch();
    const films = useSelector(filmsSelectors.getFilms);
    let favoriteId: number | undefined;

    if(typeof favorite === `number`) {
        favoriteId = favorite;
    } else if(isFilms(films)) {      
        const promoInFilms = films.find((film) => film.get(`name`) === favorite.get(`name`));

        favoriteId = (promoInFilms as Map<string, any>).get(`id`);
    }  

    const isFavorite = useSelector(favoritesSelectors.selectIsFavoriteFactory(favoriteId as number));
    const status = (isFavorite)
        ? 0
        : 1;

    const myListBtnClickHandler = useCallback((): void => {        
        dispatch(favoritesActions.fetchFavoriteRequest(favoriteId as number, status));
    }, [dispatch, status, favoriteId]);

    const favoriteError = useSelector(favoritesSelectors.getFavoriteError);
    const isFavoriteFetching = useSelector(favoritesSelectors.getIsFavoriteFetching);

    return {
        isFavoriteFetching,
        favoriteError,
        myListBtnClickHandler,
        isFavorite
    };
}
