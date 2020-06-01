import React, { FC, memo, useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Map } from 'immutable';

import { useFetchFavorite } from 'hooks/useFetchFavorite';
import * as promoSelectors from 'domains/promo/promoSelectors';
import { isPromo } from 'utils';
import { Notification } from 'components/notification/Notification';

type TFilmButtonsProps = {
    playBtnClickHandler: () => void;
    detailed?: boolean;
}

export const FilmButtons: FC<TFilmButtonsProps> = memo(({playBtnClickHandler, detailed}) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const promo = useSelector(promoSelectors.getPromo);
    
    const addReviewBtnClickHandler = useCallback(() => {
        dispatch(push(`/film/${id}/review`));
    }, [dispatch, id]);

    let favorite: number | Map<string, any>;

    if(!id && isPromo(promo)) {
        favorite = promo;
    } else {
        favorite = +id;
    }

    const {myListBtnClickHandler, isFavorite, isFavoriteFetching, favoriteError} = useFetchFavorite(favorite);    

    return (
        <>
            <button className="btn btn--play movie-card__button" type="button" title="Play"
                onClick={playBtnClickHandler}
            >
                <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play"></use>
                </svg>
                <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button" title="My list"
                onClick={myListBtnClickHandler}
            >
                <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={(isFavorite) ? `#in-list` : `#add`}></use>
                </svg>
                <span>My list</span>
            </button>
            {(detailed) &&
                <a className="btn btn--add-review movie-card__button" title="Add review"
                    onClick={addReviewBtnClickHandler}
                >
                    Add review
                </a> 
            }
            {(isFavoriteFetching || favoriteError) &&
                <Notification>
                    {(isFavoriteFetching)
                        ? `Saving to the favorites list... Please, wait`
                        : (favoriteError as Error).message
                    }
                </Notification>
            }
        </>
    );
});
