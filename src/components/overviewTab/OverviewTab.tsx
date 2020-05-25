import React, { FC, memo } from 'react';
import { Map, List } from 'immutable';

import { mapRatingToMark } from 'utils';

type TOverviewTabProps = {
    rating: string;
    scoresCount: number;
    description: string;
    director: string;
    starring: List<Map<string, any>>;
}

export const OverviewTab: FC<TOverviewTabProps> = memo(({rating, scoresCount, description, director, starring}) => {
    return (
        <>
            <div className="movie-rating">
                <div className="movie-rating__score">{rating}</div>
                <p className="movie-rating__meta">
                    <span className="movie-rating__level">{mapRatingToMark(+rating)}</span>
                    <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
                </p>
            </div>
            <div className="movie-card__text">
                <p>{description}</p>
                <p className="movie-card__director">
                    <strong>{`Director: ${director}`}</strong>
                </p>
                <p className="movie-card__starring">
                    <strong>{`Starring: ${starring.join(`, `)}`}</strong>
                </p>
            </div>
        </>
    );
});
