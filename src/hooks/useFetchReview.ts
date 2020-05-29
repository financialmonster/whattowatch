import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { reviewsActions } from 'domains/reviews/reviewsActions';
import * as reviewsSelectors from 'domains/reviews/reviewsSelectors';
import { TUserReview } from 'types';

export const useFetchReview = () => {
    const dispatch = useDispatch();

    const reviewFormSubmitHandler = useCallback((id: number, userReview: TUserReview): void => {    
        dispatch(reviewsActions.fetchReviewRequest(id, userReview));
    }, [dispatch]);

    const reviewError = useSelector(reviewsSelectors.getReviewError);
    const isReviewFetching = useSelector(reviewsSelectors.getIsReviewFetching);

    return {
        isReviewFetching,
        reviewError,
        reviewFormSubmitHandler
    };
}
