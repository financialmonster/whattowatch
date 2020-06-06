import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FavoritesFilmsContainer } from './FavoritesFilmsContainer';
import { createStoreMock } from 'mocks';

it(`FavoritesFilmsContainer: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <FavoritesFilmsContainer />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
