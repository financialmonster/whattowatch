import { TState } from 'types';

export const getIsReviewsFetching = (state: TState) => state.reviews.get(`isReviewsFetching`);

export const getReviewsError = (state: TState) => state.reviews.get(`reviewsError`);

export const getReviews = (state: TState) => state.reviews.getIn([`reviews`, `data`]);

export const getReviewsId = (state: TState) => state.reviews.getIn([`reviews`, `id`]);

export const getIsReviewFetching = (state: TState) => state.reviews.get(`isReviewFetching`);

export const getReviewError = (state: TState) => state.reviews.get(`reviewError`);
