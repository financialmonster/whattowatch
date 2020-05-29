import React, { FC, memo } from 'react';
import { Map } from 'immutable';

import { useFilmsPagePush } from 'hooks/useFilmsPagePush';

type TFilmProps = {
    film: Map<string, any>;
}

export const Film: FC<TFilmProps> = memo(({ film }) => {
    const name: string = film.get(`name`);
    const id: number = film.get(`id`);

    const filmDivClickHandler = useFilmsPagePush(id);

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
