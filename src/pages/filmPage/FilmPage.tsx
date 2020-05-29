import React, { FC } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Map } from 'immutable';

import { Header } from 'components/header/Header';
import { Spinner } from 'components/spinner/Spinner';
import { Routes } from 'mainConstants';
import { isFilms } from 'utils';
import { Footer } from 'components/footer/Footer';
import { useFetchFilms } from 'hooks/useFetchFilms';
import { DetailedFilm } from 'components/detailedFilm/DetailedFilm';
import { SimilarFilms } from 'components/similarFilms/SimilarFilms';

export const FilmPage: FC = () => {
    const {id} = useParams();
    const {isFilmsFetching, filmsError, films} = useFetchFilms();
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
        film = films.find((film: Map<String, any>) => film.get(`id`) === +id);
    }

    if(!film) {
        return <Redirect to={Routes.MAIN_PAGE} />;
    }

    const backgroundColor: string = film.get(`background_color`);
    const divStyle = {
        backgroundImage: `linear-gradient(-180deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`
    }
    const sectionStyle = {
        backgroundColor
    }

    return (
        <>
            <section className="movie-card movie-card--full" style={sectionStyle}>
                <DetailedFilm film={ film } />
            </section>
            <div className="page-content" style={divStyle}>
                <SimilarFilms film={ film } />
                <Footer />
            </div>
        </>
    );
}
