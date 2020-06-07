import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { push } from 'connected-react-router/immutable';

import api from 'api';
import { reviewsActions } from 'domains/reviews/reviewsActions';
import { TFetchReviewRequest } from 'domains/reviews/reviewsTypes';
import { HttpStatusCodes } from 'mainConstants';
import { TReviews } from 'types';

export function* workFetchReview(action: TFetchReviewRequest): SagaIterator {
    try {
        const { payload: {id, reviewData}} = action;
        const response: Response = yield call(api.reviews.fetchReview, id, reviewData);

        if(response.status === HttpStatusCodes.SUCCESS_STATUS_CODE) {
            const reviews: TReviews = yield call([response, response.json]);

            yield put(reviewsActions.fetchReviewSuccess(id, reviews));
            yield put(push(`${process.env.PUBLIC_URL}/film/${id}`));
        } else if (response.status === HttpStatusCodes.UNAUTHORIZED_STATUS_CODE) {
            throw new Error(`You're unauthorized. Please, sign in and retry.`);
        } else {
            throw new Error(`Can't save your review. Please, reload the page and retry.`);
        } 
    } catch (err) {
        yield put(reviewsActions.fetchReviewFail(err));
    }
}
