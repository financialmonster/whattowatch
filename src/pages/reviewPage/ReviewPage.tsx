import React, { FC } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Map } from 'immutable';

import * as authSelectors from 'domains/auth/authSelectors';
import { Routes } from 'mainConstants';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { isFilms } from 'utils';
import { ReviewFormContainer } from 'components/reviewFormContainer/ReviewFormContainer';

export const ReviewPage: FC = () => {
    const user = useSelector(authSelectors.getUser);
    const films = useSelector(filmsSelectors.getFilms);
    const {id} = useParams();

    let film;
    let sectionStyle = {};    

    if(isFilms(films)) {
        film = films.find((film: Map<String, any>) => film.get(`id`) === +id);

        const backgroundColor: string = (film as Map<string, any>).get(`background_color`);

        sectionStyle = { backgroundColor };
    }

    if(!user) {
        return <Redirect to={Routes.LOGIN_PAGE} />;
    }

    return (
        <section className="movie-card movie-card--full" style={ sectionStyle }>
            <div className="movie-card__header">
                <Header film={ film } />
            </div>
            <div className="add-review">
                <ReviewFormContainer />
            </div>
            <Footer />
        </section>
    );
}
