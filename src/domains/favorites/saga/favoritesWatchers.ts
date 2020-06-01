import { takeLatest, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { FavoritesActionTypes } from 'domains/favorites/favoritesConstants';
import { workFetchFavorites } from './workerFetchFavorites';
import { workFetchFavorite } from './workerFetchFavorite';

function* watchFetchFavorites(): SagaIterator {
    yield takeLatest(FavoritesActionTypes.FETCH_FAVORITES_REQUEST, workFetchFavorites);
}

function* watchFetchFavorite(): SagaIterator {
    yield takeLatest(FavoritesActionTypes.FETCH_FAVORITE_REQUEST, workFetchFavorite);
}

export function* watchFavorites(): SagaIterator {
    yield all([call( watchFetchFavorites ), call( watchFetchFavorite )]);
}
