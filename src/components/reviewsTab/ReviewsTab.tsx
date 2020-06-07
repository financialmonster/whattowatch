import React, { FC, memo } from 'react';
import { List } from 'immutable';

import { useFetchReviews } from 'hooks/useFetchReviews';
import { Spinner } from 'components/spinner/Spinner';
import { isReviews }  from 'utils';
import { Review } from 'components/review/Review';
import { Message } from 'components/message/Message';

type TReviewsTabProps = {
    id: number;
}

export const ReviewsTab: FC<TReviewsTabProps> = memo(({ id }) => {
    const {isReviewsFetching, reviewsError, reviews} = useFetchReviews(id);

    if(isReviewsFetching) {
        return <Spinner />;
    }

    if(reviewsError) {
        return (
            <Message>
                {(reviewsError as Error).message}
            </Message>
        );
    }

    let reviewsJSX: List<JSX.Element> | undefined;
    let leftColReviewsJSX: List<JSX.Element> | undefined;
    let rightColReviewsJSX: List<JSX.Element> | undefined;

    if(isReviews(reviews)) {
        reviewsJSX = reviews.sort((a, b) => Date.parse(b.get(`date`)) - Date.parse(a.get(`date`)))
                            .map((review) => <Review review={review} key={review.get(`id`)} />);

        leftColReviewsJSX = reviewsJSX.filter((_, ind) => !(ind % 2));
        rightColReviewsJSX = reviewsJSX.filter((_, ind) => ind % 2);
    }
    
    return (
        <div className = "movie-card__reviews movie-card__row">
            {(reviewsJSX) &&
                <>
                    <div className="movie-card__reviews-col">
                        {leftColReviewsJSX}
                    </div>
                    <div className="movie-card__reviews-col">
                        {rightColReviewsJSX}
                    </div>
                </>
            }
            {(!reviewsJSX) && 
                <Message>
                    No reviews yet. Your will be the first!
                </Message>
            }
        </div>
    );
});
