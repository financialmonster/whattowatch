import React, { FC } from 'react';
import { Map } from 'immutable';

type TFilmProps = {
    film: Map<string, any>
}

export const Film: FC<TFilmProps> = React.memo(({ film }) => {
    const name: string = film.get(`name`);
    const previewImage: string = film.get(`preview_image`);

    return (
        <article className="small-movie-card catalog__movies-card" title={name}>
            <div className="small-movie-card__image">
                <img src={previewImage} alt={name} width="280" height="175" />
            </div>
            <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                    {name}
                </a>
            </h3>
        </article>
    );
});
