import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

import { reviewsActions } from 'domains/reviews/reviewsActions';
import api from 'api';
import { workFetchReviews } from 'domains/reviews/saga/workerFetchReviews';
import { HttpStatusCodes } from 'mainConstants';

describe('WorkFetchReviews:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const payload = [{fake: true}, {alsoFake: true}];
        const action = {
            payload: 2
        }

        await expectSaga(workFetchReviews, action)
            .provide([[ call(api.reviews.fetchReviews, 2), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: () => Promise.resolve(payload)
            }]])
            .put(reviewsActions.fetchReviewsSuccess(2, payload))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200`, async () => {
        const action = {
            payload: 2
        }

        await expectSaga(workFetchReviews, action)
            .provide([[ call(api.reviews.fetchReviews, 2), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(reviewsActions.fetchReviewsFail(new Error(`Can't receive the list of reviews`)))
            .run();
    });
});
