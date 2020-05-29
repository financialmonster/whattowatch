import { reviewsActions } from 'domains/reviews/reviewsActions';
import { ReviewsActionTypes } from 'domains/reviews/reviewsConstants';

describe(`Reviews actions:`, () => {
    it(`fetchReviewsRequest should return the right value`, () => {
        expect(reviewsActions.fetchReviewsRequest()).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEWS_REQUEST
        });
    });

    it(`fetchReviewsSuccess should return the right value`, () => {
        expect(reviewsActions.fetchReviewsSuccess(7, [{fake: true}, {alsoFake: true}])).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS,
            payload: {
                id: 7,
                data: [{fake: true}, {alsoFake: true}]
            }
        });
    });

    it(`fetchReviewsFail should return the right value`, () => {
        expect(reviewsActions.fetchReviewsFail({error: true})).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEWS_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`fetchReviewRequest should return the right value`, () => {
        expect(reviewsActions.fetchReviewRequest(3, {fake: true})).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEW_REQUEST,
            payload: {
                id: 3,
                reviewData: {fake: true}
            }
        });
    });

    it(`fetchReviewSuccess should return the right value`, () => {
        expect(reviewsActions.fetchReviewSuccess(4, [{fake: true}, {alsoFake: true}])).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEW_SUCCESS,
            payload: {
                id: 4,
                data: [{fake: true}, {alsoFake: true}]
            }
        });
    });

    it(`fetchReviewFail should return the right value`, () => {
        expect(reviewsActions.fetchReviewFail({error: true})).toEqual({
            type: ReviewsActionTypes.FETCH_REVIEW_FAIL,
            error: true,
            payload: {error: true}
        });
    });
});
