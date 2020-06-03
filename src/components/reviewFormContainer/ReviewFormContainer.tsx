import React, { FC, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useFetchReview } from 'hooks/useFetchReview';
import { ReviewForm } from 'components/reviewForm/ReviewForm';
import { TUserReview } from 'types';
import { Notification } from 'components/notification/Notification';
import { reviewsActions } from 'domains/reviews/reviewsActions';

export const ReviewFormContainer: FC = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {isReviewFetching, reviewError, reviewFormSubmitHandler} = useFetchReview();
    const verifiedIsReviewFetching = (isReviewFetching as boolean);

    useEffect(() => {
        dispatch(reviewsActions.resetReviewError());
    }, [dispatch]);

    const handleReviewFormSubmit = useCallback((userReview: TUserReview) => {
        reviewFormSubmitHandler(+id, userReview);
    }, [id, reviewFormSubmitHandler]);

    if(reviewError) {
        return <div>{(reviewError as Error).message}</div>;
    }

    return (
        <>
            <ReviewForm isReviewFetching={verifiedIsReviewFetching} reviewFormSubmitHandler={handleReviewFormSubmit} />
            {(isReviewFetching) &&
                <Notification>
                    Sending your review... Please, wait
                </Notification>
            }
        </>
    );
}
