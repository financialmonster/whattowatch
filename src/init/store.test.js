import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers, createStore } from 'redux';

import store from './store';
import { history } from './rootReducer';
import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';
import reviewsReducer from 'domains/reviews/reviewsReducer';

const routerReducer = connectRouter(history);

const referenceRootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer,
    reviews: reviewsReducer
});

const referenceStore = createStore(referenceRootReducer);

describe(`Store:`, () => {
    it(`should have the right shape of the state`, () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
