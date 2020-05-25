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

    if(filmsError || isFilmsFetching) {
        return null;
    }

    let genresJSX: undefined | Set<JSX.Element>;
    
    if(isGenres(genres)) {
        genresJSX = genres.map((genre) => {
            const isCurrentGenre = genre === filter;
            const genreClass = cn(`catalog__genres-item`, {
                'catalog__genres-item--active': isCurrentGenre
            });

            const genreLinkStyle = (isCurrentGenre)
                ? {cursor: `default`}
                : {};

            return (
                <li className={genreClass} key={ genre }>
                    <a className="catalog__genres-link" onClick={() => genreItemClickHander(genre)} title={(isCurrentGenre) ? `` : genre}
                        style={genreLinkStyle}
                    >
                        { genre }
                    </a>
                </li>
            );
        });
    }

    return (
        <ul className="catalog__genres-list">
            { genresJSX }
        </ul>
    );
};
