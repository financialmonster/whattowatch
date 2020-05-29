import { List, Map, fromJS } from 'immutable';

import filmsReducer from 'domains/films/filmsReducer';
import { filmsActions } from 'domains/films/filmsActions';

const initialState = Map({
    films: List(),
    isFilmsFetching: true,
    filmsError: null,
    filter: `All genres`,
    film: null
});

describe(`filmsReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(filmsReducer(void 0, {})).toEqual(initialState);
    });

    it(`should return unchanged state given action with unknown type`, () => {
        expect(filmsReducer(initialState, {type: `UNKNOWN`})).toEqual(initialState);
    });

    it(`should return right state given action with FETCH_FILMS_REQUEST type`, () => {
        const newState = initialState.set(`filmsError`, null)
                                    .set(`isFilmsFetching`, true);

        expect(filmsReducer(initialState, filmsActions.fetchFilmsRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_FILMS_SUCCESS type`, () => {
        const payload = [{ fake: true }, { alsoFake: true }];
        const newState = initialState.set(`films`, fromJS(payload))
                                    .set(`isFilmsFetching`, false);

        expect(filmsReducer(initialState, filmsActions.fetchFilmsSuccess(payload)))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_FILMS_FAIL type`, () => {
        const payload = {fake: true};
        const newState = initialState.set(`films`, List())
                                    .set(`isFilmsFetching`, false)
                                    .set(`filmsError`, payload);

        expect(filmsReducer(initialState, filmsActions.fetchFilmsFail(payload))).toEqual(newState);
    });

    it(`should return right state given action with SET_FILTER type`, () => {
        const payload = `Fake`; 
        const newState = initialState.set(`filter`, payload);

        expect(filmsReducer(initialState, filmsActions.setFilter(payload))).toEqual(newState);
    });

    it(`should return right state given action with SET_FILM type`, () => {
        const payload = {fake: true}; 
        const newState = initialState.set(`film`, payload);

        expect(filmsReducer(initialState, filmsActions.setFilm(payload))).toEqual(newState);
    });
});
