import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';

const history = createBrowserHistory();
const routerReducer = connectRouter(history);

const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer
});

export { rootReducer, history };
