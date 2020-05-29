import { filmsActions } from 'domains/films/filmsActions';
import { FilmsActionTypes } from 'domains/films/filmsConstants';

describe(`Films actions:`, () => {
    it(`fetchFilmsRequest should return the right value`, () => {
        expect(filmsActions.fetchFilmsRequest()).toEqual({
            type: FilmsActionTypes.FETCH_FILMS_REQUEST
        });
    });

    it(`fetchFilmsSuccess should return the right value`, () => {
        expect(filmsActions.fetchFilmsSuccess([{fake: true}, {alsoFake: true}])).toEqual({
            type: FilmsActionTypes.FETCH_FILMS_SUCCESS,
            payload: [{fake: true}, {alsoFake: true}]
        });
    });

    it(`fetchFilmsFail should return the right value`, () => {
        expect(filmsActions.fetchFilmsFail({error: true})).toEqual({
            type: FilmsActionTypes.FETCH_FILMS_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`setFilter should return the right value`, () => {
        expect(filmsActions.setFilter(`Fake`)).toEqual({
            type: FilmsActionTypes.SET_FILTER,
            payload: `Fake`
        });
    });

    it(`setFilm should return the right value`, () => {
        expect(filmsActions.setFilm({fake: true})).toEqual({
            type: FilmsActionTypes.SET_FILM,
            payload: {fake: true}
        });
    });
});
