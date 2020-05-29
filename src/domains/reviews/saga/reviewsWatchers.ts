import { takeLatest, all, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { ReviewsActionTypes } from 'domains/reviews/reviewsConstants';
import { workFetchReviews } from './workerFetchReviews';
import { workFetchReview } from './workerFetchReview';

function* watchFetchReviews(): SagaIterator {
    yield takeLatest(ReviewsActionTypes.FETCH_REVIEWS_REQUEST, workFetchReviews);
}

function* watchFetchReview(): SagaIterator {
    yield takeLatest(ReviewsActionTypes.FETCH_REVIEW_REQUEST, workFetchReview);
}

export function* watchReviews(): SagaIterator {
    yield all([call( watchFetchReviews ), call( watchFetchReview )]);
}
