import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { favoritesActions } from 'domains/favorites/favoritesActions';
import api from 'api';
import { workFetchFavorites } from 'domains/favorites/saga/workerFetchFavorites';
import { HttpStatusCodes } from 'mainConstants';

describe('WorkFetchFavorites:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const payload = [{ fake: true}, { alsoFake: true}];

        await expectSaga(workFetchFavorites)
            .provide([[ call(api.favorites.fetchFavorites), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: () => Promise.resolve(payload)
            }]])
            .put(favoritesActions.fetchFavoritesSuccess(payload))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200`, async () => {
        await expectSaga(workFetchFavorites)
            .provide([[ call(api.favorites.fetchFavorites), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(favoritesActions.fetchFavoritesFail(new Error(`Can't receive the list of favorite films`)))
            .run();
    });
});
