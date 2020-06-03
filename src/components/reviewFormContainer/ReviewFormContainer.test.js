/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 15})}
));

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ReviewFormContainer } from './ReviewFormContainer';
import { createStoreMock } from 'mocks';
import { reviewsActions } from 'domains/reviews/reviewsActions';

Enzyme.configure({adapter: new Adapter()});

describe(`ReviewFormContainer:`, () => {
    it(`should dispatch resetReviewError action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        mount(
            <Provider store={store}>
                <ReviewFormContainer />
            </Provider>
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(reviewsActions.resetReviewError());
    });
});
