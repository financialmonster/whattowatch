import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchReview } from 'hooks/useFetchReview';
import { ReviewForm } from 'components/reviewForm/ReviewForm';
import { TUserReview } from 'types';
import { Notification } from 'components/notification/Notification';

export const ReviewFormContainer: FC = () => {
    const {id} = useParams();
    const {isReviewFetching, reviewFormSubmitHandler} = useFetchReview();
    const verifiedIsReviewFetching = (isReviewFetching as boolean);

    const handleReviewFormSubmit = useCallback((userReview: TUserReview) => {
        reviewFormSubmitHandler(+id, userReview);
    }, [id, reviewFormSubmitHandler]);

    return (
        <>
            <ReviewForm isReviewFetching={verifiedIsReviewFetching} reviewFormSubmitHandler={handleReviewFormSubmit} />
            {(isReviewFetching) &&
                <Notification>
                    Sending your review... Please, wait.
                </Notification>
            }
        </>
    );
}
