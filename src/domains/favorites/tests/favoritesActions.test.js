import { favoritesActions } from 'domains/favorites/favoritesActions';
import { FavoritesActionTypes } from 'domains/favorites/favoritesConstants';

describe(`Favorites actions:`, () => {
    it(`fetchFavoritesRequest should return the right value`, () => {
        expect(favoritesActions.fetchFavoritesRequest()).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITES_REQUEST
        });
    });

    it(`fetchFavoritesSuccess should return the right value`, () => {
        expect(favoritesActions.fetchFavoritesSuccess([{fake: true}, {alsoFake: true}])).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITES_SUCCESS,
            payload: [{fake: true}, {alsoFake: true}]
        });
    });

    it(`fetchFavoritesFail should return the right value`, () => {
        expect(favoritesActions.fetchFavoritesFail({error: true})).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITES_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`fetchFavoriteRequest should return the right value`, () => {
        expect(favoritesActions.fetchFavoriteRequest(7, 1)).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITE_REQUEST,
            payload: {
                id: 7,
                status: 1
            }
        });
    });

    it(`fetchFavoriteSuccess should return the right value`, () => {
        expect(favoritesActions.fetchFavoriteSuccess([{fake: true}, {alsoFake: true}])).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITE_SUCCESS,
            payload: [{fake: true}, {alsoFake: true}]
        });
    });

    it(`fetchFavoriteFail should return the right value`, () => {
        expect(favoritesActions.fetchFavoriteFail({error: true})).toEqual({
            type: FavoritesActionTypes.FETCH_FAVORITE_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`resetFavoriteError should return the right value`, () => {
        expect(favoritesActions.resetFavoriteError()).toEqual({
            type: FavoritesActionTypes.RESET_FAVORITE_ERROR
        });
    });
});
