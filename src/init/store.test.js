import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';

import { persistedStore } from './store';
import { history } from './rootReducer';
import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';
import reviewsReducer from 'domains/reviews/reviewsReducer';

const persistConfig = {
    transforms: [immutableTransform()],
    key: `root`,
    storage
}

const routerReducer = connectRouter(history);

const referenceRootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer,
    reviews: reviewsReducer
});
const referencePersistedRootReducer = persistReducer(persistConfig, referenceRootReducer);

const referenceStore = createStore(referencePersistedRootReducer);
const referencePersistedStore = persistStore(referenceStore);

describe(`Store:`, () => {
    it(`should have the right shape of the state`, () => {
        expect(persistedStore.getState()).toEqual(referencePersistedStore.getState());
    });
});
