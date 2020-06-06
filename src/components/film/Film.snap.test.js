import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { Film } from './Film';
import { createStoreMock, mockedFilm } from 'mocks';

it(`Film: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <Film film={mockedFilm} />
        </Provider> 
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
