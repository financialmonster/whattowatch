import React, { FC } from 'react';

import { Footer } from 'components/footer/Footer';
import { DetailedFilmContainer } from 'components/detailedFilmContainer/DetailedFilmContainer';
import { SimilarFilms } from 'components/similarFilms/SimilarFilms';

export const FilmPage: FC = () => {
    return (
        <>
            <section className="movie-card movie-card--full">
                <DetailedFilmContainer />
            </section>
            <div className="page-content">
                <SimilarFilms />
                <Footer />
            </div>
        </>
    );
}
