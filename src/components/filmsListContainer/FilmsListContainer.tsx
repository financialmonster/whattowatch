import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { List, Map } from 'immutable';

import { useFetchFilms } from 'hooks/useFetchFilms';
import Spinner from 'components/spinner/Spinner';
import { FilmsList } from 'components/filmsList/FilmsList';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { useFilmsListBatch } from 'hooks/useFilmsListBatch';

export const FilmsListContainer: FC = () => {
    const {isFilmsFetching, filmsError} = useFetchFilms();
    const {batch, requestNextBatch} = useFilmsListBatch();

    const filteredFilms = useSelector(filmsSelectors.selectFilmsByGenre);
    const showMoreBtnClickHandler = useCallback(requestNextBatch, []);

    const batchedFilms = (filteredFilms as List<Map<string, any>>).slice(0, batch);
    const hasMoreFilms = batchedFilms.size < (filteredFilms as List<Map<string, any>>).size;

    if(isFilmsFetching) {
        return <Spinner />;
    }

    if(filmsError) {
        return <div>Error</div>;
    }

    return (
        <>
            <FilmsList films={ batchedFilms } />
            <div className="catalog__more">
                {(hasMoreFilms) &&
                    <button className="catalog__button" type="button" onClick={showMoreBtnClickHandler}>
                        Show more
                    </button>
                }
            </div>
        </>
    );
}
