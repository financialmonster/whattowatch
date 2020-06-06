import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { LoginForm } from './LoginForm';
import { createStoreMock } from 'mocks';

it(`LoginForm: correctly rendered`, () => {
    const mockStore = configureStore();
    const store = mockStore(createStoreMock());

    const tree = renderer.create(
        <Provider store={store}>
            <LoginForm />
        </Provider>        
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
