/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 15})}
));

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { ReviewFormContainer } from './ReviewFormContainer';
import { createStoreMock } from 'mocks';

it(`ReviewFormContainer: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <ReviewFormContainer />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
