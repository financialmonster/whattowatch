import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ReviewsTab } from './ReviewsTab';
import { reviewsActions } from 'domains/reviews/reviewsActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`ReviewsTab:`, () => {
    it(`should dispatch fetchReviewsRequest action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());
        
        mount(
            <Provider store={store}>
                <ReviewsTab />
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(reviewsActions.fetchReviewsRequest());
    });
});
