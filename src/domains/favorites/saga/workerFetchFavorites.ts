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
            throw new Error(`We are sorry. List of films can't be loaded now. Please, reload the page.`);
        }

        const favorites: TFilms = yield call([response, response.json]);

        yield put(favoritesActions.fetchFavoritesSuccess(favorites));
    } catch (err) {
        yield put(favoritesActions.fetchFavoritesFail(err));
    }
}
