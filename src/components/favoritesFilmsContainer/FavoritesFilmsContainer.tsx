import React, { FC } from 'react';
import { Map, List } from 'immutable';

import { FilmsList } from 'components/filmsList/FilmsList';
import { useFetchFavorites } from 'hooks/useFetchFavorites';
import { Spinner } from 'components/spinner/Spinner';
import { isFilms } from 'utils';
import { Message } from 'components/message/Message';

export const FavoritesFilmsContainer: FC = () => {
    const {isFavoritesFetching, favoritesError, favorites} = useFetchFavorites();

    if(isFavoritesFetching) {
        return <Spinner />;
    }

    if(favoritesError) {
        return (
            <Message>
                {(favoritesError as Error).message}
            </Message>
        );
    }

    let favoritesList: List<Map<string, any>> | undefined;

    if(isFilms(favorites)) {
        favoritesList = favorites;
    } else {
        return (
            <Message>
                Your list of favorite films is empty!
            </Message>
        );
    }


    return <FilmsList films={favoritesList} />;
}
