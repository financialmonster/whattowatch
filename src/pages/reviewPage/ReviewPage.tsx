import React, { FC, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Map } from 'immutable';

import * as authSelectors from 'domains/auth/authSelectors';
import { Routes } from 'mainConstants';
import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { isFilms } from 'utils';
import { ReviewFormContainer } from 'components/reviewFormContainer/ReviewFormContainer';
import * as reviewsSelectors from 'domains/reviews/reviewsSelectors';
import { Message } from 'components/message/Message';
import { reviewsActions } from 'domains/reviews/reviewsActions';

export const ReviewPage: FC = () => {
    const user = useSelector(authSelectors.getUser);
    const films = useSelector(filmsSelectors.getFilms);
    const reviewError = useSelector(reviewsSelectors.getReviewError);

    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(reviewsActions.resetReviewError());
    }, [dispatch]);

    let film;
    let sectionStyle = {};

    if(isFilms(films)) {
        film = films.find((film) => film.get(`id`) === +id);

        const backgroundColor: string = (film as Map<string, any>).get(`background_color`);

        sectionStyle = { backgroundColor:backgroundColor };
    }

    if(!user) {
        return <Redirect to={`${process.env.PUBLIC_URL}${Routes.LOGIN_PAGE}`} />;
    }

    return (
        <section className="movie-card movie-card--full" style={ sectionStyle }>
            <div className="movie-card__header">
                <Header film={ film } />
            </div>
            {(reviewError) &&
                <Message>
                    {(reviewError as Error).message}
                </Message>
            }
            {(!reviewError) &&
                <div className="add-review">
                    <ReviewFormContainer />
                </div>
            }
            <Footer />
        </section>
    );
}
