import { FavoritesActionTypes } from './favoritesConstants';
import { TFavoritesActions } from './favoritesTypes';
import { TFilms } from 'types';

export const favoritesActions = {
    fetchFavoritesRequest: (): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITES_REQUEST
    }),

    fetchFavoritesSuccess: (favorites: TFilms): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITES_SUCCESS,
        payload: favorites
    }),

    fetchFavoritesFail: (error: Error): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITES_FAIL,
        error: true,
        payload: error
    }),

    fetchFavoriteRequest: (id: number, status: number): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITE_REQUEST,
        payload: {
            id,
            status
        }
    }),

    fetchFavoriteSuccess: (favorites: TFilms): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITE_SUCCESS,
        payload: favorites
    }),

    fetchFavoriteFail: (error: Error): TFavoritesActions => ({
        type: FavoritesActionTypes.FETCH_FAVORITE_FAIL,
        error: true,
        payload: error
    })
}
