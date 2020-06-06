import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FilmsList } from './FilmsList';
import { createStoreMock } from 'mocks';

it(`FilmsList: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <FilmsList films={store.getState().films.get('films')} />
        </Provider>   
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
