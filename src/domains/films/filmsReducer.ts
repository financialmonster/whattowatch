import { List, fromJS, Map } from 'immutable';

import { TFilmsState, TFilmsActions } from './filmsTypes';
import { FilmsActionTypes } from './filmsConstants';

const initialState: TFilmsState = {
    films: List(),
    isFilmsFetching: true,
    filmsError: null,
    filter: `All genres`,
    film: null
}

const initialStateImmutable = Map(initialState);

const filmsReducer = (state = initialStateImmutable, action: TFilmsActions): typeof initialStateImmutable => {
    switch (action.type) {
        case FilmsActionTypes.FETCH_FILMS_REQUEST:
            return state.set(`filmsError`, null)
                        .set(`isFilmsFetching`, true);

        case FilmsActionTypes.FETCH_FILMS_SUCCESS:
            return state.set(`films`, fromJS(action.payload))
                        .set(`isFilmsFetching`, false);

        case FilmsActionTypes.FETCH_FILMS_FAIL:
            return state.set(`films`, List())
                        .set(`isFilmsFetching`, false)
                        .set(`filmsError`, action.payload);

        case FilmsActionTypes.SET_FILTER:
            return state.set(`filter`, action.payload);

        case FilmsActionTypes.SET_FILM:
            return state.set(`film`, action.payload);

        default:
            // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
            const x: never = action;
    }

    return state;
}

export default filmsReducer;
