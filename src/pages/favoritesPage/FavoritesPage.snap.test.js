import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { FavoritesPage } from './FavoritesPage';
import { createStoreMock } from 'mocks';
import { history } from 'init/rootReducer'; 

it(`FavoritesPage: correctly rendered`, () => {
    const routerMiddleware = createRouterMiddleware(history);
    const mockStore = configureStore([ routerMiddleware ]);
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <Router history={history}>
                <FavoritesPage />
            </Router>
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});