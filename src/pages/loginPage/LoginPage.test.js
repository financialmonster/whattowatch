import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { LoginPage } from './LoginPage';
import { createStoreMock } from 'mocks';
import { authActions } from 'domains/auth/authActions';
import { history } from 'init/rootReducer'; 

Enzyme.configure({adapter: new Adapter()});

describe(`LoginPage:`, () => {
    it(`should dispatch resetAuthError action after mounting`, () => {
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore(createStoreMock());

        mount(
            <Provider store={ store }>
                <Router history={history}>
                    <LoginPage />
                </Router>               
            </Provider>
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(authActions.resetAuthError());
    });
});
