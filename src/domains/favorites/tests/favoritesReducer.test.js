import { Map, fromJS, List } from 'immutable';

import favoritesReducer from 'domains/favorites/favoritesReducer';
import { favoritesActions } from 'domains/favorites/favoritesActions';

const initialState = Map({
    favorites: List(),
    isFavoritesFetching: true,
    favoritesError: null,
    isFavoriteFetching: false,
    favoriteError: null
});

describe(`FavoritesReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(favoritesReducer(void 0, {})).toEqual(initialState);
    });

    it(`should return unchanged state given action with unknown type`, () => {
        expect(favoritesReducer(initialState, {type: `UNKNOWN`})).toEqual(initialState);
    });

    it(`should return right state given action with FETCH_FAVORITES_REQUEST type`, () => {
        const newState = initialState.set(`favoritesError`, null)
                                    .set(`isFavoritesFetching`, true);

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoritesRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITES_SUCCESS type`, () => {
        const payload = {alsoFake: true};
        const newState = initialState.set(`favorites`, fromJS([payload]))
                                    .set(`isFavoritesFetching`, false);

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoritesSuccess(payload)))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITES_FAIL type`, () => {
        const newState = initialState.set(`favorites`, List())
                                    .set(`isFavoritesFetching`, false)
                                    .set(`favoritesError`, { fake: true});

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoritesFail({fake: true}))).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITE_REQUEST type`, () => {
        const newState = initialState.set(`favoriteError`, null)
                                    .set(`isFavoriteFetching`, true);

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoriteRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITE_SUCCESS type`, () => {
        const newState = initialState.set(`isFavoriteFetching`, false);

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoriteSuccess())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITE_FAIL type`, () => {
        const newState = initialState.set(`isFavoriteFetching`, false)
                                    .set(`favoriteError`, { fake: true});

        expect(favoritesReducer(initialState, favoritesActions.fetchFavoriteFail({fake: true}))).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FAVORITE_FAIL type`, () => {
        const newState = initialState.set(`favoriteError`, null);

        expect(favoritesReducer(initialState, favoritesActions.resetFavoriteError())).toEqual(newState);
    });
});
