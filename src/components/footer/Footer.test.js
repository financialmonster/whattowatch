import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import configureStore from 'redux-mock-store';

import { Routes } from 'mainConstants';
import { Footer } from './Footer';

Enzyme.configure({adapter: new Adapter()});

describe(`Footer:`, () => {
    it(`when user is on the main page and clicks on the logo link, he should stay on the main page`, () => {
        const history = createMemoryHistory({ initialEntries: [`/`] });
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore();

        let testPath;

        const render = ({ location }) => {
            testPath = location.pathname;
        }

        const footer = mount(
            <Provider store={store}> 
                <Router history={history}>
                    <Footer />
                    <Route path={`*`} render={render} />
                </Router>
            </Provider>
        );

        const logoLink = footer.find(`.logo__link`);

        logoLink.simulate(`click`);

        expect(testPath).toEqual(Routes.MAIN_PAGE);
    });

    it(`when user is not on the main page and clicks on the logo link, he should be redirected to the main page`, () => {
        const history = createMemoryHistory({ initialEntries: [`/test`] });
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore();

        let testPath;

        const render = ({ location }) => {
            testPath = location.pathname;
        }

        const footer = mount(
            <Provider store={store}> 
                <Router history={history}>
                    <Footer />
                    <Route path={`*`} render={render} />
                </Router>
            </Provider>
        );

        const logoLink = footer.find(`.logo__link`);

        logoLink.simulate(`click`);

        expect(testPath).toEqual(Routes.MAIN_PAGE);
    });
});
