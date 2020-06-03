/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 1}),
    useLocation: () => ({pathname: `${process.env.PUBLIC_URL}film/1`})
}));

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import eventually from 'wix-eventually';

import { FilmPage } from './FilmPage';
import { filmsActions } from 'domains/films/filmsActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`FilmPage:`, () => {
    it(`should dispatch fetchFilmsRequest action after mounting if there is no films in the store`, () => {
        const history = createMemoryHistory({ initialEntries: [`/film/1`] });
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore(createStoreMock(`special`));

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

    it(`the page should be automatically scrolled to the top after the film changes`, async () => {
        jest.setTimeout(15000);        

        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        global.scrollTo = jest.fn();

        const filmPage = mount(
            <Provider store={store}>
                <FilmPage />
            </Provider>
        );

        const similarFilm = filmPage.find(`.small-movie-card__image`).at(0);
        similarFilm.simulate(`click`);

        await eventually(() => {
            expect(global.scrollTo).toHaveBeenCalledTimes(1);
            expect(global.scrollTo).toHaveBeenNthCalledWith(1, 0, 0);
        });
    });
});
