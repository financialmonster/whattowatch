import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { rootReducer, history } from './rootReducer';

const routerMiddleware = createRouterMiddleware(history);
const middlewares = [ routerMiddleware ];

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: (action) => (action.error) ? 'firebrick' : 'deepskyblue',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    }
});

if(process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
