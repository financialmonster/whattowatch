import { Map, fromJS, List } from 'immutable';

export const createStoreMock = (mode: string = `common`) => {
    return {
        promo: Map({
            promo: Map(),
            isPromoFetching: true,
            promoError: null
        }),
        films: Map({
            films: (mode === `special`)
                    ? List()
                    : fromJS([{
                genre: `Thriller`,
                id: 1,
                rating: 1,
                scoresCount: 1,
                description: ``,
                director: ``,
                starring: [``, ``]
            }, {
                genre: `Comedy`,
                id: 2,
                rating: 1,
                scoresCount: 1,
                description: ``,
                director: ``,
                starring: [``, ``]
            }, {
                genre: `Thriller`,
                id: 3,
                rating: 1,
                scoresCount: 1,
                description: ``,
                director: ``,
                starring: [``, ``]
            }]),
            isFilmsFetching: mode === `special`,
            filmsError: null,
            filter: `All genres`
        }),
        auth: Map({
            user: null,
            authError: null,
            isAuthFetching: false,
            authStatusError: null,
            isAuthStatusFetching: false
        }),
        reviews: Map({
            reviews: fromJS({ id: 8, data: List()}),
            isReviewsFetching: true,
            reviewsError: null
        })
    }
}

export const mockedFilm = Map({
    rating: 1,
    scoresCount: 1,
    description: ``,
    director: ``,
    starring: [``, ``],
    genre: `Comedy`
});
