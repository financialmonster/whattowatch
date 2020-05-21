import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Set } from 'immutable'

import * as filmsSelectors from 'domains/films/filmsSelectors';
import { isGenres } from 'utils';
import { useGenreFilter } from 'hooks/useGenreFilter';

export const GenreFilter: FC = () => {
    const genres = useSelector(filmsSelectors.selectGenres);
    const filmsError = useSelector(filmsSelectors.getFilmsError);
    const isFilmsFetching = useSelector(filmsSelectors.getIsFilmsFetching);

    const {filter, genreItemClickHander} = useGenreFilter();

    if (filmsError || isFilmsFetching) {
        return null;
    }

    let genresJSX: undefined | Set<JSX.Element>;
    
    if(isGenres(genres)) {
        genresJSX = genres.map((genre) => {
            const genreClass = cn(`catalog__genres-item`, {
                'catalog__genres-item--active': genre === filter
            });

            return (
                <li className={genreClass} key={ genre }>
                    <a className="catalog__genres-link" onClick={() => genreItemClickHander(genre)} title={ genre }>
                        { genre }
                    </a>
                </li>
            );
        });
    }

    const allGenresClass = cn(`catalog__genres-item`, {
        'catalog__genres-item--active': filter === `All genres`
    });

    return (
        <ul className="catalog__genres-list">
            <li className={allGenresClass}>
                <a className="catalog__genres-link" onClick={() => genreItemClickHander(`All genres`)}
                    title="All genres"
                >
                    All genres
                </a>
            </li>
            { genresJSX }
        </ul>
    );
};
