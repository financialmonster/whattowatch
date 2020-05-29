import { Map, fromJS, List } from 'immutable';

import reviewsReducer from 'domains/reviews/reviewsReducer';
import { reviewsActions } from 'domains/reviews/reviewsActions';

const initialState = Map({
    reviews: fromJS({id: null, data: List()}),
    isReviewsFetching: true,
    reviewsError: null,
    isReviewFetching: false,
    reviewError: null
});

describe(`ReviewsReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(reviewsReducer(void 0, {})).toEqual(initialState);
    });

    it(`should return unchanged state given action with unknown type`, () => {
        expect(reviewsReducer(initialState, {type: `UNKNOWN`})).toEqual(initialState);
    });

    it(`should return right state given action with FETCH_REVIEWS_REQUEST type`, () => {
        const newState = initialState.set(`reviewsError`, null)
                                    .set(`isReviewsFetching`, true);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewsRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_REVIEWS_SUCCESS type`, () => {
        const payload = {
            id: 3,
            data: [{fake: true}, {alsoFake: true}]
        }
        const newState = initialState.set(`reviews`, fromJS(payload))
                                    .set(`isReviewsFetching`, false);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewsSuccess(3, [{ fake: true}, { alsoFake: true}])))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_REVIEWS_FAIL type`, () => {
        const payload = {fake: true};
        const newState = initialState.set(`reviews`, fromJS({id: null, data: List()}))
                                    .set(`isReviewsFetching`, false)
                                    .set(`reviewsError`, payload);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewsFail(payload))).toEqual(newState);
    });

    it(`should return right state given action with FETCH_REVIEW_REQUEST type`, () => {
        const newState = initialState.set(`reviewError`, null)
                                    .set(`isReviewFetching`, true);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_REVIEW_SUCCESS type`, () => {
        const payload = {
            id: 2,
            data: [{fake: true}, {alsoFake: true}]
        }
        const newState = initialState.set(`reviews`, fromJS(payload))
                                    .set(`isReviewFetching`, false)
                                    .set(`isReviewsFetching`, false);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewSuccess(2, [{ fake: true }, { alsoFake: true }])))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_REVIEW_FAIL type`, () => {
        const payload = {fake: true};
        const newState = initialState.set(`isReviewFetching`, false)
                                    .set(`isReviewsFetching`, false)
                                    .set(`reviewError`, payload);

        expect(reviewsReducer(initialState, reviewsActions.fetchReviewFail(payload))).toEqual(newState);
    });
});
