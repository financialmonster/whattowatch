import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { filmsActions } from 'domains/films/filmsActions';
import api from 'api';
import { workFetchFilms } from 'domains/films/saga/workerFetchFilms';
import { HttpStatusCodes } from 'mainConstants';

describe('workFetchFilms:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const payload = [{fake: true}, {alsoFake: true}];

        await expectSaga(workFetchFilms)
            .provide([[ call(api.films.fetchFilms), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: jest.fn(() => Promise.resolve(payload))
            }]])
            .put(filmsActions.fetchFilmsSuccess(payload))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200`, async () => {
        await expectSaga(workFetchFilms)
            .provide([[ call(api.films.fetchFilms), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(filmsActions.fetchFilmsFail(new Error(
                `We are sorry. List of films can't be loaded now. Please, reload the page.`
            )))
            .run();
    });
});
