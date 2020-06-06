import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FilmsListContainer } from './FilmsListContainer';
import { createStoreMock } from 'mocks';

it(`FilmsListContainer: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <FilmsListContainer />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
