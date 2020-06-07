import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { favoritesActions } from 'domains/favorites/favoritesActions';
import api from 'api';
import { workFetchFavorite } from 'domains/favorites/saga/workerFetchFavorite';
import { HttpStatusCodes } from 'mainConstants';

describe('workFetchFavorite:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const payload = [{ fake: true}, { alsoFake: true}];
        const action = {
            payload: {
                id: 1,
                status: 0
            }
        }

        await expectSaga(workFetchFavorite, action)
            .provide([[ call(api.favorites.fetchFavorite, 1, 0), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: () => Promise.resolve(payload)
            }]])           
            .put(favoritesActions.fetchFavoriteSuccess(payload))
            .put(favoritesActions.fetchFavoritesRequest())
            .run();
    });

    it(`should properly handle request scenario with response code 401`, async () => {
        const action = {
            payload: {
                id: 1,
                status: 0
            }
        }

        await expectSaga(workFetchFavorite, action)
            .provide([[ call(api.favorites.fetchFavorite, 1, 0), {
                status: HttpStatusCodes.UNAUTHORIZED_STATUS_CODE
            }]])
            .put(favoritesActions.fetchFavoriteFail(new Error(`You're unauthorized. Please, sign in and retry.`)))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200 and 401`, async () => {
        const action = {
            payload: {
                id: 1,
                status: 0
            }
        }

        await expectSaga(workFetchFavorite, action)
            .provide([[ call(api.favorites.fetchFavorite, 1, 0), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(favoritesActions.fetchFavoriteFail(new Error(
                `We are sorry. The film can't be marked as favorite. Please, reload the page and retry.`
            )))
            .run();
    });
});
