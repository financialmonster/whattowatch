import React, { FC, memo, useCallback } from 'react';
import { push } from 'connected-react-router/immutable';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

type TFilmButtonsProps = {
    playBtnClickHandler: () => void;
    detailed?: boolean;
}

export const FilmButtons: FC<TFilmButtonsProps> = memo(({playBtnClickHandler, detailed}) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const addReviewBtnClickHandler = useCallback(() => {
        dispatch(push(`/film/${id}/review`));
    }, [dispatch, id]);

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
            <button className="btn btn--list movie-card__button" type="button" title="My list">
                <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
            </button>
            {(detailed) &&
                <a className="btn btn--add-review movie-card__button" title="Add review" onClick={addReviewBtnClickHandler}>
                    Add review
                </a> 
            }
        </>
    );
});
