import React, { FC, memo } from 'react';
import { Map, List } from 'immutable';

import { getTimeFromMins } from 'utils';

type TDetailsTabProps = {
    released: number;
    runTime: number;
    genre: string;
    director: string;
    starring: List<Map<string, any>>;
}

export const DetailsTab: FC<TDetailsTabProps> = memo(({ released, runTime, genre, director, starring }) => {
    return (
        <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{ director }</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                        { starring.join(`,\n`) }
                    </span>
                </p>
            </div>
            <div className="movie-card__text-col">
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{getTimeFromMins(runTime)}</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{ genre }</span>
                </p>
                <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{ released }</span>
                </p>
            </div>
        </div>
    );
});
