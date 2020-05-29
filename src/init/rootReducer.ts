import { connectRouter } from 'connected-react-router/immutable';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';
import filmsReducer from 'domains/films/filmsReducer';
import reviewsReducer from 'domains/reviews/reviewsReducer';

const history = createBrowserHistory();
const routerReducer = connectRouter(history);

const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer,
    films: filmsReducer,
    reviews: reviewsReducer
});

export { rootReducer, history };
