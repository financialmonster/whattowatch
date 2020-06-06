import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { history } from 'init/rootReducer'; 
import { App } from './App';
import { authActions } from 'domains/auth/authActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`App:`, () => {
    it(`should dispatch fetchAuthStatusRequest action after mounting`, () => {
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore(createStoreMock());
        
        mount(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>        
        );

        expect(store.getActions().length).toBe(3);
        expect(store.getActions()[2]).toEqual(authActions.fetchAuthStatusRequest());
    });
});
