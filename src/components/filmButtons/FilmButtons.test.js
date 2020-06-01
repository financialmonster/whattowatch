/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 5})}
));

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { Router, Route } from 'react-router-dom';

import { FilmButtons } from './FilmButtons';
import { createStoreMock } from 'mocks';
import { favoritesActions } from 'domains/favorites/favoritesActions';

Enzyme.configure({adapter: new Adapter()});

describe(`FilmButtons:`, () => {
    let store;
    let history;

    beforeEach(() => {
        history = createMemoryHistory();
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        store = mockStore(createStoreMock());
    });

    it(`the playBtnClickHandler callback should be invoked on click on the play button`, () => {
        const playBtnClickHandler = jest.fn();

        const filmButtons = mount(
            <Provider store={ store }>
                <FilmButtons playBtnClickHandler={playBtnClickHandler} />
            </Provider>
        );

        const playBtn = filmButtons.find(`.btn--play`);
        playBtn.simulate(`click`);

        expect(playBtnClickHandler).toHaveBeenCalledTimes(1);
    });

    it(`when user clicks on the addReview button, he should be redirected to the review page`, () => {
        let testPath;

        const render = ({ location }) => {
            testPath = location.pathname;
        }

        const filmButtons = mount(
            <Provider store={ store }>
                <Router history={ history }>
                    <FilmButtons detailed />
                    <Route path={`*`} render={render} />
                </Router>
            </Provider>
        );

        const addReviewBtn = filmButtons.find(`.btn--add-review`);
        addReviewBtn.simulate(`click`);

        expect(testPath).toEqual(`/film/5/review`);
    });

    it(`click on the myList button should add the film to the favorites list if this film isn't favorite`, () => {
        const filmButtons = mount(
            <Provider store={ store }>
                <FilmButtons />
            </Provider>
        );

        const myListBtn = filmButtons.find(`.btn--list`);
        myListBtn.simulate(`click`);

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(favoritesActions.fetchFavoriteRequest(5, 1));
    });

    it(`click on the myList button should remove the film from the favorites list if this film is favorite`, () => {
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        store = mockStore(createStoreMock(`special`));

        const filmButtons = mount(
            <Provider store={ store }>
                <FilmButtons />
            </Provider>
        );

        const myListBtn = filmButtons.find(`.btn--list`);
        myListBtn.simulate(`click`);

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(favoritesActions.fetchFavoriteRequest(5, 0));
    });
});
