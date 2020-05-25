import React, { FC, memo } from 'react';
import { Map } from 'immutable';

import { VideoPlayer } from 'components/videoPlayer/VideoPlayer';
import { usePlayingVideo } from 'hooks/usePlayingVideo';
import { FilmButtons } from 'components/filmButtons/FilmButtons';

type TPromoProps = {
    promo: Map<string, any>;
}

export const Promo: FC<TPromoProps> = memo(({ promo }) => {
    const { isPlaying, handleExitBtnClick, playBtnClickHandler, videoRef, isVideoLoading,
        onCanPlayThroughHandler} = usePlayingVideo();
    const name: string = promo.get(`name`);

    return (
        <div className="movie-card__wrap">
            <div className="movie-card__info">
                <div className="movie-card__poster">
                    <img src={promo.get(`preview_image`)} alt={`${name} poster`} width="218" height="327" />
                </div>
                <div className="movie-card__desc">
                    <h2 className="movie-card__title">{name}</h2>
                    <p className="movie-card__meta">
                        <span className="movie-card__genre">{promo.get(`genre`)}</span>
                        <span className="movie-card__year">{promo.get(`released`)}</span>
                    </p>
                    <div className="movie-card__buttons">
                        {<FilmButtons playBtnClickHandler={playBtnClickHandler} />}
                    </div>
                </div>
                <VideoPlayer src={promo.get(`video_link`)} posterImage={promo.get(`poster_image`)}
                    runTime={promo.get(`run_time`)} ref={videoRef} isPlaying={isPlaying}
                    handleExitBtnClick={handleExitBtnClick} isVideoLoading={isVideoLoading}
                    onCanPlayThroughHandler={onCanPlayThroughHandler}
                />
            </div>
        </div>
    );
});
