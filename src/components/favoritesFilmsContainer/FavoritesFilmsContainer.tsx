import React, { FC } from 'react';
import { Map, List } from 'immutable';

import { FilmsList } from 'components/filmsList/FilmsList';
import { useFetchFavorites } from 'hooks/useFetchFavorites';
import { Spinner } from 'components/spinner/Spinner';
import { isFilms } from 'utils';

export const FavoritesFilmsContainer: FC = () => {
    const {isFavoritesFetching, favoritesError, favorites} = useFetchFavorites();

    if(isFavoritesFetching) {
        return <Spinner />;
    }

    if(favoritesError) {
        return <div>Error</div>;
    }

    let favoritesList: List<Map<string, any>> | undefined;

    if(isFilms(favorites)) {
        favoritesList = favorites;
    } else {
        return <div>Your list of favorite films is empty!</div>;
    }


    return <FilmsList films={favoritesList} />;
}
