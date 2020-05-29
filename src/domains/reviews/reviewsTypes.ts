import { List, Map } from 'immutable';

import { ReviewsActionTypes } from './reviewsConstants';
import { TReviews, TUserReview } from 'types';

export type TFetchReviewsRequest = {
    type: typeof ReviewsActionTypes.FETCH_REVIEWS_REQUEST;
    payload: number;
}

type TFetchReviewsSuccess = {
    type: typeof ReviewsActionTypes.FETCH_REVIEWS_SUCCESS;
    payload: {
        id: number;
        data: TReviews; 
    };
}

type TFetchReviewsFail = {
    type: typeof ReviewsActionTypes.FETCH_REVIEWS_FAIL;
    error: boolean;
    payload: Error;
}

export type TFetchReviewRequest = {
    type: typeof ReviewsActionTypes.FETCH_REVIEW_REQUEST;
    payload: {
        id: number;
        reviewData: TUserReview;
    }
}

type TFetchReviewSuccess = {
    type: typeof ReviewsActionTypes.FETCH_REVIEW_SUCCESS;
    payload: {
        id: number;
        data: TReviews;
    }
}

type TFetchReviewFail = {
    type: typeof ReviewsActionTypes.FETCH_REVIEW_FAIL;
    error: boolean;
    payload: Error;
}

export type TReviewsActions = TFetchReviewsRequest | TFetchReviewsSuccess | TFetchReviewsFail | TFetchReviewRequest |
    TFetchReviewSuccess | TFetchReviewFail;

export type TReviewsState = {
    reviews: Map<string, any>;
    isReviewsFetching: boolean;
    reviewsError: null | Error;
    isReviewFetching: boolean;
    reviewError: null | Error;
}
