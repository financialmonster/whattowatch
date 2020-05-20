import React, { FC } from 'react';

import { useFetchFilms } from 'hooks/useFetchFilms';
import Spinner from 'components/spinner/Spinner';
// import FilmsList from 'components/filmsList/FilmsList';

export const FilmsListContainer: FC = () => {
    const {isFilmsFetching, filmsError, films} = useFetchFilms();

    if(isFilmsFetching) {
        return <Spinner />;
    }

    if(filmsError) {
        return <div>Error</div>;
    }

    // return <FilmsList films={films} />;
    return <div></div>;
}
