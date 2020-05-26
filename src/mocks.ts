import { Map, fromJS, List } from 'immutable';

export const createStoreMock = (mode: string = `common`) => {
    return {
        promo: Map({
            promo: Map(),
            isPromoFetching: true,
            promoError: null
        }),
        films: Map({
            films: fromJS([{genre: `Thriller`, id: 1}, {genre: `Comedy`, id: 2}]),
            isFilmsFetching: mode === `detailed`,
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
            reviews: List(),
            isReviewsFetching: true,
            reviewsError: null
        })
    }
}
