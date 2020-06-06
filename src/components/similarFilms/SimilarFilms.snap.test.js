import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { SimilarFilms } from './SimilarFilms';
import { createStoreMock, mockedFilm } from 'mocks';

it(`SimilarFilms: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <SimilarFilms film={mockedFilm} />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
