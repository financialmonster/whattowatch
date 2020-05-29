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

Enzyme.configure({adapter: new Adapter()});

describe(`FilmButtons:`, () => {
    it(`the playBtnClickHandler callback should be invoked on click on the play button`, () => {
        const playBtnClickHandler = jest.fn();
        const mockStore = configureStore();
        const store = mockStore();

        const filmButtons = mount(
            <Provider store={store}>
                <FilmButtons playBtnClickHandler={playBtnClickHandler} />
            </Provider>
        );

        const playBtn = filmButtons.find(`.btn--play`);
        playBtn.simulate(`click`);

        expect(playBtnClickHandler).toHaveBeenCalledTimes(1);
    });

    it(`when user clicks on the addReview button, he should be redirected to the review page`, () => {
        const history = createMemoryHistory();
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore();

        let testPath;

        const render = ({ location }) => {
            testPath = location.pathname;
        }

        const filmButtons = mount(
            <Provider store={store}>
                <Router history={history}>
                    <FilmButtons detailed />
                    <Route path={`*`} render={render} />
                </Router>
            </Provider>
        );

        const addReviewBtn = filmButtons.find(`.btn--add-review`);
        addReviewBtn.simulate(`click`);

        expect(testPath).toEqual(`/film/5/review`);
    });
});
