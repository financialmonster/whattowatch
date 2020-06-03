import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { push } from 'connected-react-router/immutable';

import { reviewsActions } from 'domains/reviews/reviewsActions';
import api from 'api';
import { workFetchReview } from 'domains/reviews/saga/workerFetchReview';
import { HttpStatusCodes } from 'mainConstants';

describe('WorkFetchReview:', () => {
    it(`should properly handle request scenario with response code 200`, async () => {
        const payload = [{ fake: true }, { alsoFake: true }];
        const action = {
            payload: {
                id: 1,
                reviewData: `Fake`
            }
        }

        await expectSaga(workFetchReview, action)
            .provide([[ call(api.reviews.fetchReview, 1, `Fake`), {
                status: HttpStatusCodes.SUCCESS_STATUS_CODE,
                json: () => Promise.resolve(payload)
            }]])           
            .put(reviewsActions.fetchReviewSuccess(1, payload))
            .put(push(`${process.env.PUBLIC_URL}/film/1`))
            .run();
    });

    it(`should properly handle request scenario with response code 401`, async () => {
        const action = {
            payload: {
                id: 1,
                reviewData: `Fake`
            }
        }

        await expectSaga(workFetchReview, action)
            .provide([[ call(api.reviews.fetchReview, 1, `Fake`), {
                status: HttpStatusCodes.UNAUTHORIZED_STATUS_CODE
            }]])
            .put(reviewsActions.fetchReviewFail(new Error(`You're unauthorized. Please, sign in and retry`)))
            .run();
    });

    it(`should properly handle request scenario with response code that differs from 200 and 401`, async () => {
        const action = {
            payload: {
                id: 1,
                reviewData: `Fake`
            }
        }

        await expectSaga(workFetchReview, action)
            .provide([[ call(api.reviews.fetchReview, 1, `Fake`), {
                status: HttpStatusCodes.NOT_FOUND_STATUS_CODE
            }]])
            .put(reviewsActions.fetchReviewFail(new Error(`Can't save your review. Please, retry later`)))
            .run();
    });
});
