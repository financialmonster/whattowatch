import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { reviewsActions } from 'domains/reviews/reviewsActions';
import * as reviewsSelectors from 'domains/reviews/reviewsSelectors';

export const useFetchReviews = (id: number) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(reviewsActions.fetchReviewsRequest(id))
    }, [dispatch, id]);

    const reviews = useSelector(reviewsSelectors.getReviews);
    const reviewsError = useSelector(reviewsSelectors.getReviewsError);
    const isReviewsFetching = useSelector(reviewsSelectors.getIsReviewsFetching);

    return {
        isReviewsFetching,
        reviewsError,
        reviews
    };
}
