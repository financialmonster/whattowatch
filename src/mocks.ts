import { Map, fromJS } from 'immutable';

export const storeMock = {
    promo: Map({
        promo: Map(),
        isPromoFetching: true,
        promoError: null
    }),
    films: Map({
        films: fromJS([{ genre: `Thriller`, id: 1 }, { genre: `Comedy`, id: 2 }]),
        isFilmsFetching: false,
        filmsError: null,
        filter: `All genres`
    }),
    auth: Map({
        isLoggedIn: false
    })
}
