/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 1}),
    useLocation: () => ({pathname: `${process.env.PUBLIC_URL}film/1`})
}));

import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FilmPage } from './FilmPage';
import { createStoreMock } from 'mocks';

it(`FilmPage: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <FilmPage />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
