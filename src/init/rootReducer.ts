import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';

import authReducer from '../domains/auth/authReducer';

const history = createBrowserHistory();
const routerReducer = connectRouter(history);

const rootReducer = combineReducers({
    router: routerReducer,
    auth: authReducer
});

export type TState = ReturnType<typeof rootReducer>;
export { rootReducer, history };
