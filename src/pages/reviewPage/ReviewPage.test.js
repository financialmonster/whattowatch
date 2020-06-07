/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 1})}
));

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

import { history } from 'init/rootReducer'; 
import { ReviewPage } from './ReviewPage';
import { createStoreMock } from 'mocks';
import { reviewsActions } from 'domains/reviews/reviewsActions';

Enzyme.configure({adapter: new Adapter()});

describe(`ReviewPage:`, () => {
    it(`should dispatch resetReviewError action after mounting`, () => {
        const routerMiddleware = createRouterMiddleware(history);
        const mockStore = configureStore([routerMiddleware]);
        const store = mockStore(createStoreMock());

        mount(
            <Provider store={store}>
                <Router history={history}>
                    <ReviewPage />
                </Router>
            </Provider>
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(reviewsActions.resetReviewError());
    });
});
