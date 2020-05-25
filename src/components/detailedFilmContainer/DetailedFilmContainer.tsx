import React, { FC } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Map } from 'immutable';

import { Spinner } from 'components/spinner/Spinner';
import { isFilms } from 'utils';
import { useFetchFilms } from 'hooks/useFetchFilms';
import { DetailedFilm } from 'components/detailedFilm/DetailedFilm';
import { Header } from 'components/header/Header';
import { useDetailedFilmTabs } from 'hooks/useDetailedFilmTabs';
import { Routes } from 'mainConstants';

export const DetailedFilmContainer: FC = () => {
    const {id} = useParams();
    const {isFilmsFetching, filmsError, films} = useFetchFilms();
    const {currentTab, navLinkClickHandler} = useDetailedFilmTabs();
    let film;    

    if(isFilmsFetching) {
        return (
            <div className="movie-card__hero">
                <Header />
                <Spinner />
            </div>
        );
    }

    if(filmsError) {
        return (
            <div className="movie-card__hero">
                <Header />
                <div>Error</div>
            </div>
        );
    }

    if(isFilms(films)) {
        film = films.find((film: Map<string, any>) => film.get(`id`) === +id);
    }

    if(!film) {
        return <Redirect to={Routes.MAIN_PAGE} />;
    }

    const verifiedFilm = film as Map<string, any>;

    return <DetailedFilm film={verifiedFilm} navLinkClickHandler={navLinkClickHandler} currentTab={currentTab} />;
}
