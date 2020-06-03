import { List, fromJS, Map } from 'immutable';

import { TReviewsState, TReviewsActions } from './reviewsTypes';
import { ReviewsActionTypes } from './reviewsConstants';

const initialState: TReviewsState = {
    reviews: fromJS({ id: null, data: List()}),
    isReviewsFetching: true, 
    reviewsError: null,
    isReviewFetching: false,
    reviewError: null
}

const initialStateImmutable = Map(initialState);

const reviewsReducer = (state = initialStateImmutable, action: TReviewsActions): typeof initialStateImmutable => {
    switch (action.type) {
        case ReviewsActionTypes.FETCH_REVIEWS_REQUEST:
            return state.set(`reviewsError`, null)
                        .set(`isReviewsFetching`, true);

        case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
            return state.set(`reviews`, fromJS(action.payload))
                        .set(`isReviewsFetching`, false);

        case ReviewsActionTypes.FETCH_REVIEWS_FAIL:
            return state.set(`reviews`, fromJS({id: null, data: List()}))
                        .set(`isReviewsFetching`, false)
                        .set(`reviewsError`, action.payload);

        case ReviewsActionTypes.FETCH_REVIEW_REQUEST:
            return state.set(`reviewError`, null)
                        .set(`isReviewFetching`, true);

        case ReviewsActionTypes.FETCH_REVIEW_SUCCESS:
            return state.set(`reviews`, fromJS(action.payload))
                        .set(`isReviewFetching`, false)
                        .set(`isReviewsFetching`, false);

        case ReviewsActionTypes.FETCH_REVIEW_FAIL:
            return state.set(`isReviewFetching`, false)
                        .set(`isReviewsFetching`, false)
                        .set(`reviewError`, action.payload);

        case ReviewsActionTypes.RESET_REVIEW_ERROR:
            return state.set(`reviewError`, null);

        default:
            // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
            const x: never = action;
    }

    return state;
}

export default reviewsReducer;
