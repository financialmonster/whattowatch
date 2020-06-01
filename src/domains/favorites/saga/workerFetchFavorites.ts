import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { favoritesActions } from 'domains/favorites/favoritesActions';
import { HttpStatusCodes } from 'mainConstants';
import { TFilms } from 'types';

export function* workFetchFavorites(): SagaIterator {
    try {
        const response: Response = yield call(api.favorites.fetchFavorites);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`Can't receive the list of favorite films`);
        }

        const favorites: TFilms = yield call([response, response.json]);

        yield put(favoritesActions.fetchFavoritesSuccess(favorites));
    } catch (err) {
        yield put(favoritesActions.fetchFavoritesFail(err));
    }
}
