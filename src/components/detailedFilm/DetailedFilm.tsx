import React, { FC, memo, useEffect } from 'react';
import { Map, List } from 'immutable';
import cn from 'classnames';

import { Header } from 'components/header/Header';
import { OverviewTab } from 'components/overviewTab/OverviewTab';
import { DetailsTab } from 'components/detailsTab/DetailsTab';
import { ReviewsTab } from 'components/reviewsTab/ReviewsTab';
import { usePlayingVideo } from 'hooks/usePlayingVideo';
import { FilmButtons } from 'components/filmButtons/FilmButtons';
import { VideoPlayer } from 'components/videoPlayer/VideoPlayer';
import { useDetailedFilmTabs } from 'hooks/useDetailedFilmTabs';

type TDetailedFilmProps = {
    film: Map<string, any>;
}

export const DetailedFilm: FC<TDetailedFilmProps> = memo(({ film }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [film]);

    const {isPlaying, handleExitBtnClick, playBtnClickHandler, videoRef, isVideoLoading,
        onCanPlayThroughHandler} = usePlayingVideo();
    const {currentTab, navLinkClickHandler} = useDetailedFilmTabs();

    const posterImage: string = film.get(`poster_image`);
    const name: string = film.get(`name`);
    const genre: string = film.get(`genre`);
    const released: number = film.get(`released`);
    const runTime: number = film.get(`run_time`);
    const director: string = film.get(`director`);
    const starring: List<Map<string, any>> = film.get(`starring`);

    const tabs: string[] = [`Overview`, `Details`, `Reviews`];
    const navLinksJSX: JSX.Element[] = tabs.map((tab) => {
        const isCurrentTab = tab === currentTab;
        const navItemClass = cn(`movie-nav__item`, {
            'movie-nav__item--active': isCurrentTab
        });

        const navLinkStyle = (isCurrentTab)
            ? {cursor: `default`}
            : {};

        return (
            <li className={navItemClass} key={ tab }>
                <a className="movie-nav__link" onClick={() => navLinkClickHandler(tab)}
                    title={(isCurrentTab) ? `` : tab} style={navLinkStyle}
                >
                    { tab }
                </a>
            </li>
        );
    });
    
    return (
        <>
            <div className="movie-card__hero">
                <Header film={film} />
                <div className="movie-card__wrap">
                    <div className="movie-card__desc">
                        <h2 className="movie-card__title">{name}</h2>
                        <p className="movie-card__meta">
                            <span className="movie-card__genre">{genre}</span>
                            <span className="movie-card__year">{released}</span>
                        </p>
                        <div className="movie-card__buttons">
                            {<FilmButtons playBtnClickHandler={playBtnClickHandler} />}
                            <a href="add-review.html" className="btn movie-card__button" title="Add review">
                                Add review
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movie-card__wrap movie-card__translate-top">
                <div className="movie-card__info">
                    <div className="movie-card__poster movie-card__poster--big">
                        <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
                    </div>
                    <div className="movie-card__desc">
                        <nav className="movie-nav movie-card__nav">
                            <ul className="movie-nav__list">
                                {navLinksJSX}
                            </ul>
                        </nav>
                        {(currentTab === `Overview`) &&
                            <OverviewTab rating={film.get(`rating`).toFixed(1)} scoresCount={film.get(`scores_count`)}
                                description={film.get(`description`)} director={director} starring={starring}
                            />
                        }
                        {(currentTab === `Details`) &&
                            <DetailsTab genre={genre} released={released} runTime={runTime}
                                director={director} starring={starring}
                            />
                        }
                        {(currentTab === `Reviews`) && <ReviewsTab id={film.get(`id`)} />}                  
                    </div>
                    <VideoPlayer src={film.get(`video_link`)} posterImage={posterImage} runTime={runTime} ref={videoRef}
                        handleExitBtnClick={handleExitBtnClick} onCanPlayThroughHandler={onCanPlayThroughHandler}
                        isVideoLoading={isVideoLoading} isPlaying={isPlaying}
                    />
                </div>
            </div>
        </>
    );
});
