import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { LoginFormContainer } from './LoginFormContainer';
import { createStoreMock } from 'mocks';

it(`LoginFormContainer: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <LoginFormContainer />
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
