import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import authReducer from 'domains/auth/authReducer';
import promoReducer from 'domains/promo/promoReducer';

const history = createBrowserHistory();
const routerReducer = connectRouter(history);

const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer,
    promo: promoReducer
});

export { rootReducer, history };
