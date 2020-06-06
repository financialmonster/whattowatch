import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { GenreFilter } from './GenreFilter';
import { createStoreMock } from 'mocks';

it(`GenreFilter: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <GenreFilter />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
