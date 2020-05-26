import React, { FC, memo } from 'react';
import { Map } from 'immutable';    

import { mapMonthToNubmer } from 'utils';

type TReviewProps = {
    review: Map<string, any>;
}

export const Review: FC<TReviewProps> = memo(({ review }) => {
    const date = new Date(Date.parse(review.get(`date`)));
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (
        <div className="review">
            <blockquote className="review__quote">
                <p className="review__text">
                    {review.get(`comment`)}
                </p>
                <footer className="review__details">
                    <cite className="review__author">
                        {review.getIn([`user`, `name`])}
                    </cite>
                    <time className="review__date" dateTime={`${year}-${month + 1}-${day}`}>
                        {`${mapMonthToNubmer(month)} ${day}, ${year}`}
                    </time>
                </footer>
            </blockquote>
            <div className="review__rating">
                {review.get(`rating`)}
            </div>
        </div>
    );
});
