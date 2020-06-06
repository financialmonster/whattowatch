import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { Footer } from './Footer';
import { history } from 'init/rootReducer'; 

it(`Footer: correctly rendered`, () => {
    const routerMiddleware = createRouterMiddleware(history);
    const mockStore = configureStore([ routerMiddleware ]);
    const store = mockStore();

    const tree = renderer.create(
        <Provider store={store}>
            <Router history={history}>
                <Footer />
            </Router>
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
