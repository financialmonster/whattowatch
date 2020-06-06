/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 5})}
));

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FilmButtons } from './FilmButtons';
import { createStoreMock } from 'mocks';

it(`FilmButtons: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <FilmButtons />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
