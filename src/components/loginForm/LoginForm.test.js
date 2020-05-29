import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import eventually from "wix-eventually";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStoreMock } from 'mocks';

import { LoginForm } from './LoginForm';

Enzyme.configure({adapter: new Adapter()});

describe(`LoginForm:`, () => {
    it(`default action of the loginForm after submission should be prevented`, async () => {
        const preventDefault = jest.fn();
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        const loginForm = mount(
            <Provider store={store}>
                <LoginForm loginFormSubmitHandler={() => {}} />
            </Provider>
        );

        const form = loginForm.find(`.sign-in__form`).at(0);

        form.simulate(`submit`, {
            preventDefault
        });

        await eventually(() => {
            expect(preventDefault).toHaveBeenCalledTimes(1);
            expect(preventDefault.mock.calls[0][0]).toEqual(void 0);
        });
    });

    it(`loginFormSubmitHandler callback should be invoked with right values on the submission of the
        loginForm`,
    async () => {
        jest.setTimeout(15000);        
        
        const loginFormSubmitHandler = jest.fn();
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        const loginForm = mount(
            <Provider store={store}>
                <LoginForm loginFormSubmitHandler={loginFormSubmitHandler} />
            </Provider>
        );

        const form = loginForm.find(`.sign-in__form`).at(0);
        const emailInput = loginForm.find(`#user-email`).at(0);
        const passwordInput = loginForm.find(`#user-password`).at(0);

        emailInput.simulate(`change`, { target: {value: `example@mail.ru`, name: `email`}});
        passwordInput.simulate(`change`, { target: {value: `exampletest`, name: `password`}});
        form.simulate(`submit`);

        await eventually(() => {
            expect(loginFormSubmitHandler).toHaveBeenCalledTimes(1);
            expect(loginFormSubmitHandler.mock.calls[0][0]).toEqual({
                email: `example@mail.ru`,
                password: `exampletest`
            });
        });
    });

    it(`loginFormSubmitHandler callback should not be invoked on the submission of the
        loginForm if the value of email field is not valid`,
    async () => {
        jest.setTimeout(15000);        
        
        const loginFormSubmitHandler = jest.fn();
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        const loginForm = mount(
            <Provider store={store}>
                <LoginForm loginFormSubmitHandler={loginFormSubmitHandler} />
            </Provider>
        );

        const form = loginForm.find(`.sign-in__form`).at(0);
        const emailInput = loginForm.find(`#user-email`).at(0);
        const passwordInput = loginForm.find(`#user-password`).at(0);

        emailInput.simulate(`change`, { target: {value: `example`, name: `email`}});
        passwordInput.simulate(`change`, { target: {value: `exampletest`, name: `password`}});
        form.simulate(`submit`);

        await eventually(() => {
            expect(loginFormSubmitHandler).toHaveBeenCalledTimes(0);
        });
    });

    it(`loginFormSubmitHandler callback should not be invoked on the submission of the
        loginForm if the value of password field is not valid`,
    async () => {
        jest.setTimeout(15000);        
        
        const loginFormSubmitHandler = jest.fn();
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        const loginForm = mount(
            <Provider store={store}>
                <LoginForm loginFormSubmitHandler={loginFormSubmitHandler} />
            </Provider>
        );

        const form = loginForm.find(`.sign-in__form`).at(0);
        const emailInput = loginForm.find(`#user-email`).at(0);
        const passwordInput = loginForm.find(`#user-password`).at(0);

        emailInput.simulate(`change`, { target: {value: `example@mail.ru`, name: `email`}});
        passwordInput.simulate(`change`, { target: {value: `test`, name: `password`}});
        form.simulate(`submit`);

        await eventually(() => {
            expect(loginFormSubmitHandler).toHaveBeenCalledTimes(0);
        });
    });
});
