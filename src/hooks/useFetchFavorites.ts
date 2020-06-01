import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { favoritesActions } from 'domains/favorites/favoritesActions';
import * as favoritesSelectors from 'domains/favorites/favoritesSelectors';

export const useFetchFavorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(favoritesSelectors.getFavorites);

    useEffect(() => {
        dispatch(favoritesActions.fetchFavoritesRequest());
    }, [dispatch]);

    const favoritesError = useSelector(favoritesSelectors.getFavoritesError);
    const isFavoritesFetching = useSelector(favoritesSelectors.getIsFavoritesFetching);
    
    return {
        isFavoritesFetching,
        favoritesError,
        favorites
    };
}
