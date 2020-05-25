import React, { FC, useCallback, memo } from 'react';
import { Map } from 'immutable';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';

import { Routes } from 'mainConstants';

type TFilmProps = {
    film: Map<string, any>;
}

export const Film: FC<TFilmProps> = memo(({ film }) => {
    const name: string = film.get(`name`);
    const id: number = film.get(`id`);
    const dispatch = useDispatch();

    const filmDivClickHandler = useCallback(() => {
        dispatch(push(`${Routes.FILM_PAGE}/${id}`));
    }, [dispatch, id]);

    return (
        <article className="small-movie-card catalog__movies-card" title={name}>
            <div className="small-movie-card__image" onClick={filmDivClickHandler}>
                <img src={film.get(`preview_image`)} alt={name} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
                <a className="small-movie-card__link">
                    {name}
                </a>
            </h3>
        </article>
    );
});
