import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { FilmPage } from './FilmPage';
import { filmsActions } from 'domains/films/filmsActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`FilmPage:`, () => {
    it(`should dispatch fetchFilmsRequest action after mounting`, () => {
        const history = createMemoryHistory({ initialEntries: [`/film/1`] });
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore(createStoreMock(`detailed`));

        mount(
            <Provider store={store}>
                <Router history={history}>
                    <FilmPage />
                </Router>
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(filmsActions.fetchFilmsRequest());
    });
});
