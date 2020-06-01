import { createSelector } from 'reselect';

import { isFilms } from 'utils';
import { TState } from 'types';

export const getIsFavoritesFetching = (state: TState) => state.favorites.get(`isFavoritesFetching`);

export const getFavoritesError = (state: TState) => state.favorites.get(`favoritesError`);

export const getFavorites = (state: TState) => state.favorites.get(`favorites`);

export const getIsFavoriteFetching = (state: TState) => state.favorites.get(`isFavoriteFetching`);

export const getFavoriteError = (state: TState) => state.favorites.get(`favoriteError`);

export const selectIsFavoriteFactory = (favoriteId: number) => createSelector( getFavorites, (favorites) => {
    if(isFilms(favorites)) {        
        return favorites.find((favorite) => favorite.get(`id`) === favoriteId);
    }
    
    return false;
});
