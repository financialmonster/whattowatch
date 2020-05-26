import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Map, List } from 'immutable';

import { selectSimilarFilmsFactory } from 'domains/films/filmsSelectors';
import { Film } from 'components/film/Film';
import { isFilms } from 'utils';

type TSimilarFilmsProps = {
    film: Map<string, any>;
}

export const SimilarFilms: FC<TSimilarFilmsProps> = memo(({ film }) => {
    const similarFilms = useSelector(selectSimilarFilmsFactory(film));
    const filmsJSX: List<JSX.Element> =
        (similarFilms as List<Map<string, any>>).map((film) => <Film key={film.get(`id`)} film={film} />);

    if(!isFilms(similarFilms)) {
        return null;
    }

    return (
        <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__movies-list">
                {filmsJSX}
            </div>
        </section>
    );
});
