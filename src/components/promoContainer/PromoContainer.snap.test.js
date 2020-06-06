import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { PromoContainer } from './PromoContainer';
import { createStoreMock } from 'mocks';

it(`PromoContainer: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <PromoContainer />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
