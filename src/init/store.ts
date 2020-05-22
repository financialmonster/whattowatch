import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, history } from './rootReducer';
import { rootSaga } from './rootSaga'; 

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware, routerMiddleware ];

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

if(process.env.NODE_ENV !== `production`) {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
