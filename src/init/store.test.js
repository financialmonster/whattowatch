import { connectRouter } from 'connected-react-router';
import { combineReducers, createStore } from 'redux';

import store from './store';
import { history } from './rootReducer';
import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';

const routerReducer = connectRouter(history);

const referenceRootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer
});

const referenceStore = createStore(referenceRootReducer);

describe(`Store:`, () => {
    it(`should have the right shape of the state`, () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
