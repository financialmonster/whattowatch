import { List, Map } from 'immutable';

import { FavoritesActionTypes } from './favoritesConstants';
import { TFilms } from 'types';

export type TFetchFavoritesRequest = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITES_REQUEST;
}

type TFetchFavoritesSuccess = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITES_SUCCESS;
    payload: TFilms;
}

type TFetchFavoritesFail = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITES_FAIL;
    error: boolean;
    payload: Error;
}

export type TFetchFavoriteRequest = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITE_REQUEST;
    payload: {
        id: number;
        status: number;
    };
}

type TFetchFavoriteSuccess = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITE_SUCCESS;
    payload: TFilms;
}

type TFetchFavoriteFail = {
    type: typeof FavoritesActionTypes.FETCH_FAVORITE_FAIL;
    error: boolean;
    payload: Error;
}

export type TFavoritesActions = TFetchFavoritesRequest | TFetchFavoritesSuccess | TFetchFavoritesFail | TFetchFavoriteRequest |
    TFetchFavoriteSuccess | TFetchFavoriteFail;

export type TFavoritesState = {
    favorites: List<Map<string, any>>;
    isFavoritesFetching: boolean;
    favoritesError: null | Error;
    isFavoriteFetching: boolean;
    favoriteError: null | Error;
}
