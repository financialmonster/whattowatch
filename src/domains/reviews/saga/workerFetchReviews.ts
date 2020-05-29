import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import api from 'api';
import { reviewsActions } from 'domains/reviews/reviewsActions';
import { TFetchReviewsRequest } from 'domains/reviews/reviewsTypes';
import { HttpStatusCodes } from 'mainConstants';
import { TReviews } from 'types';

export function* workFetchReviews(action: TFetchReviewsRequest): SagaIterator {
    try {
        const response: Response = yield call(api.reviews.fetchReviews, action.payload);

        if(response.status !== HttpStatusCodes.SUCCESS_STATUS_CODE) {
            throw new Error(`Can't receive the list of reviews`);
        }

        const reviews: TReviews = yield call([response, response.json]);

        yield put(reviewsActions.fetchReviewsSuccess(action.payload, reviews));
    } catch (err) {
        yield put(reviewsActions.fetchReviewsFail(err));
    }
}
