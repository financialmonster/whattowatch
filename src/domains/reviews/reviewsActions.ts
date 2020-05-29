import { ReviewsActionTypes } from './reviewsConstants';
import { TReviewsActions } from './reviewsTypes';
import { TReviews, TUserReview } from 'types';

export const reviewsActions = {
    fetchReviewsRequest: (id: number): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEWS_REQUEST,
        payload: id
    }),

    fetchReviewsSuccess: (id: number, reviews: TReviews): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
        payload: {
            id,
            data: reviews
        }
    }),

    fetchReviewsFail: (error: Error): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEWS_FAIL,
        error: true,
        payload: error
    }),

    fetchReviewRequest: (id: number, reviewData: TUserReview): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEW_REQUEST,
        payload: {
            id,
            reviewData
        }
    }),

    fetchReviewSuccess: (id: number, reviews: TReviews): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEW_SUCCESS,
        payload: {
            id,
            data: reviews
        }
    }),

    fetchReviewFail: (error: Error): TReviewsActions => ({
        type: ReviewsActionTypes.FETCH_REVIEW_FAIL,
        error: true,
        payload: error
    })
}
