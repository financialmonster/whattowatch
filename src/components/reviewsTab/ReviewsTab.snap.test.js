import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ReviewsTab } from './ReviewsTab'; 
import { createStoreMock } from 'mocks';

it(`ReviewsTab: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <ReviewsTab />
        </Provider> 
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
