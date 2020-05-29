import React, { FC, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchReview } from 'hooks/useFetchReview';
import { ReviewForm } from 'components/reviewForm/ReviewForm';
import { TUserReview } from 'types';

export const ReviewFormContainer: FC = () => {
    const {id} = useParams();    
    const {isReviewFetching, reviewError, reviewFormSubmitHandler} = useFetchReview();
    const verifiedIsReviewFetching = (isReviewFetching as boolean);

    const handleReviewFormSubmit = useCallback((userReview: TUserReview) => {
        reviewFormSubmitHandler(+id, userReview);
    }, [id, reviewFormSubmitHandler]);

    if(reviewError) {
        return <div>Error</div>;
    }

    return (
        <ReviewForm isReviewFetching={verifiedIsReviewFetching} reviewFormSubmitHandler={handleReviewFormSubmit} />
    );
}
