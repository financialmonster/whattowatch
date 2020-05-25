import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { List, Map } from 'immutable';

import { useFetchFilms } from 'hooks/useFetchFilms';
import { Spinner } from 'components/spinner/Spinner';
import { FilmsList } from 'components/filmsList/FilmsList';
import * as filmsSelectors from 'domains/films/filmsSelectors';
import { useFilmsListBatch } from 'hooks/useFilmsListBatch';
import { isFilms } from 'utils';

export const FilmsListContainer: FC = () => {
    const {isFilmsFetching, filmsError, films} = useFetchFilms();
    const {batch, requestNextBatch} = useFilmsListBatch();

    const filteredFilms = useSelector(filmsSelectors.selectFilmsByGenre);
    const showMoreBtnClickHandler = useCallback(requestNextBatch, []);
    let batchedFilms;
    let hasMoreFilms;

    if(isFilms(films)) {
        batchedFilms = (filteredFilms as List<Map<string, any>>).slice(0, batch);
        hasMoreFilms = batchedFilms.size < (filteredFilms as List<Map<string, any>>).size;
    }

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
                    <button className="catalog__button" type="button" onClick={showMoreBtnClickHandler}
                        title="Show more"
                    >
                        Show more
                    </button>
                }
            </div>
        </>
    );
}
