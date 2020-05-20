import React, { FC } from 'react';

import { VideoPlayer } from 'components/videoPlayer/VideoPlayer';
import { usePlayingVideo } from 'hooks/usePlayingVideo';
import { isPromo } from 'utils';

type TPromoProps = {
    promo: boolean | object | null | undefined
}

const Promo: FC<TPromoProps> = ({promo}) => {
    const {isPlaying, handleExitBtnClick, playBtnClickHandler, videoRef} = usePlayingVideo();

    let previewImage: string | undefined, name: string | undefined, genre: string | undefined,
        released: number | undefined, src: string | undefined, posterImage: string | undefined,
        runTime: number | undefined;

    if(isPromo(promo)) {
        previewImage = promo.get(`preview_image`);
        name = promo.get(`name`);
        genre = promo.get(`genre`);
        released = promo.get(`released`);
        src = promo.get(`video_link`);
        posterImage = promo.get(`poster_image`);
        runTime = promo.get(`run_time`);
    }

    return (
        <div className="movie-card__wrap">
            <div className="movie-card__info">
                <div className="movie-card__poster">
                    <img src={previewImage} alt={`${name} poster`} width="218" height="327" />
                </div>
                <div className="movie-card__desc">
                    <h2 className="movie-card__title">{ name }</h2>
                    <p className="movie-card__meta">
                        <span className="movie-card__genre">{ genre }</span>
                        <span className="movie-card__year">{ released }</span>
                    </p>
                    <div className="movie-card__buttons">
                        <button className="btn btn--play movie-card__button" type="button"
                            onClick={playBtnClickHandler}
                        >
                            <svg viewBox="0 0 19 19" width="19" height="19">
                                <use xlinkHref="#play"></use>
                            </svg>
                            <span>Play</span>
                        </button>
                        <button className="btn btn--list movie-card__button" type="button">
                            <svg viewBox="0 0 19 20" width="19" height="20">
                                <use xlinkHref="#add"></use>
                            </svg>
                            <span>My list</span>
                        </button>
                    </div>
                </div>
                <VideoPlayer src={src} posterImage={posterImage} runTime={runTime} ref={videoRef}
                    isPlaying={isPlaying} handleExitBtnClick={handleExitBtnClick}
                />
            </div>
        </div>
    );
}

export default React.memo(Promo);
