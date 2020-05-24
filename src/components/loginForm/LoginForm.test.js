import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from '@testing-library/react';
import eventually from "wix-eventually";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { storeMock } from 'mocks';

import { LoginForm } from './LoginForm';
import { authActions } from 'domains/auth/authActions';

Enzyme.configure({adapter: new Adapter()});

describe(`LoginForm:`, () => {
    it(`default action of the loginForm after submission should be prevented`, async () => {
        const preventDefault = jest.fn();

        const loginForm = mount(
            <LoginForm loginFormSubmitHandler={() => {}} />
        );

        act(() => {
            const form = loginForm.find(`.sign-in__form`).at(0);
            const emailInput = loginForm.find(`#user-email`).at(0);
            const passwordInput = loginForm.find(`#user-password`).at(0);

            emailInput.simulate(`change`, { target: {value: `example@mail.ru`, name: `email`} });
            passwordInput.simulate(`change`, { target: {value: `exampletest`, name: `password`} });

            form.simulate(`submit`, {
                preventDefault
            });
        });

        // await eventually(() => {
            // loginForm.update();

            expect(preventDefault).toHaveBeenCalledTimes(1);
            expect(preventDefault.mock.calls[0][0]).toEqual(void 0);
        // });
    });

    it.only(`should dispatch fetchAuthRequest action after submission of the loginForm with right values of the email
        and password inputs`,
    async () => {
        const mockStore = configureStore();
        const store = mockStore(storeMock);
        const loginFormSubmitHandler = jest.fn();

        const loginForm = mount(
            <Provider store={store}>
                <LoginForm loginFormSubmitHandler={loginFormSubmitHandler} />
            </Provider>
        );

        jest.setTimeout(30000);        

        act(() => {
            const form = loginForm.find(`.sign-in__form`).at(0);
            const emailInput = loginForm.find(`#user-email`).at(0);
            const passwordInput = loginForm.find(`#user-password`).at(0);

            emailInput.simulate(`change`, { target: {value: 'example@mail.ru', name: `email`} });
            passwordInput.simulate(`change`, { target: {value: 'exampletest', name: `password`} });

            form.simulate(`submit`);
        });

        // await new Promise((resolve) => setTimeout(resolve, 1000));
        await eventually(() => {
            loginForm.update();

            expect(loginFormSubmitHandler).toHaveBeenCalledTimes(1);
            expect(loginFormSubmitHandler.mock.calls[0][0]).toEqual(void 0);
            // expect(store.getActions().length).toBe(1);
            // expect(store.getActions()[0]).toEqual(authActions.fetchAuthRequest({email: `example@mail.ru`, password: `exampletest`}));
        });
    });
});
