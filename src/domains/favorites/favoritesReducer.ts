import { List, fromJS, Map } from 'immutable';

import { TFavoritesState, TFavoritesActions } from './favoritesTypes';
import { FavoritesActionTypes } from './favoritesConstants';

const initialState: TFavoritesState = {
    favorites: List(),
    isFavoritesFetching: true,
    favoritesError: null,
    isFavoriteFetching: false,
    favoriteError: null
}

const initialStateImmutable = Map(initialState);

const favoritesReducer = (state = initialStateImmutable, action: TFavoritesActions): typeof initialStateImmutable => {
    switch (action.type) {
        case FavoritesActionTypes.FETCH_FAVORITES_REQUEST:
            return state.set(`favoritesError`, null)
                        .set(`isFavoritesFetching`, true);

        case FavoritesActionTypes.FETCH_FAVORITES_SUCCESS:
            const adaptedFavorites = (Array.isArray(action.payload)) ? action.payload : [ action.payload ];

            return state.set(`favorites`, fromJS(adaptedFavorites))
                        .set(`isFavoritesFetching`, false);

        case FavoritesActionTypes.FETCH_FAVORITES_FAIL:
            return state.set(`favorites`, List())
                        .set(`isFavoritesFetching`, false)
                        .set(`favoritesError`, action.payload);

        case FavoritesActionTypes.FETCH_FAVORITE_REQUEST:
            return state.set(`favoriteError`, null)
                        .set(`isFavoriteFetching`, true);

        case FavoritesActionTypes.FETCH_FAVORITE_SUCCESS:
            return state.set(`isFavoriteFetching`, false);

        case FavoritesActionTypes.FETCH_FAVORITE_FAIL:
            return state.set(`isFavoriteFetching`, false)
                        .set(`favoriteError`, action.payload);

        case FavoritesActionTypes.RESET_FAVORITE_ERROR:
            return state.set(`favoriteError`, null);

        default:
            // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
            const x: never = action;
    }

    return state;
}

export default favoritesReducer;
