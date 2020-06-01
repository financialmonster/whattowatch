import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { favoritesActions } from 'domains/favorites/favoritesActions';
import { TFetchFavoriteRequest } from 'domains/favorites/favoritesTypes';
import { HttpStatusCodes } from 'mainConstants';
import { TFilms } from 'types';

export function* workFetchFavorite(action: TFetchFavoriteRequest): SagaIterator {
    try {
        const { payload: {id, status}} = action;
        const response: Response = yield call(api.favorites.fetchFavorite, id, status);

        if(response.status === HttpStatusCodes.SUCCESS_STATUS_CODE) {
            const favorites: TFilms = yield call([response, response.json]);

            yield put(favoritesActions.fetchFavoriteSuccess(favorites));
            yield put(favoritesActions.fetchFavoritesRequest());
        } else if (response.status === HttpStatusCodes.UNAUTHORIZED_STATUS_CODE) {
            throw new Error(`You're unauthorized. Please, sign in and retry`);
        } else {
            throw new Error(`Can't save the film to the favorites list. Please, retry later`);
        }     
    } catch(err) {
        yield put(favoritesActions.fetchFavoriteFail(err));
    }
}
