import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';

import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';
import reviewsReducer from 'domains/reviews/reviewsReducer';
import favoritesReducer from 'domains/favorites/favoritesReducer';

const persistConfig = {
    transforms: [immutableTransform()],
    key: `root`,
    storage
}

export const history = createBrowserHistory();
const routerReducer = connectRouter(history);

const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
