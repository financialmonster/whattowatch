import React, { FC, memo } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { loginFormShape } from 'formShapes';
import { TUserData } from 'types';

type TLoginFormProps = {
    loginFormSubmitHandler: (userData: TUserData) => void;
}

export const LoginForm: FC<TLoginFormProps> = memo(({loginFormSubmitHandler}) => (
    <Formik initialValues={loginFormShape.initialValues} onSubmit={loginFormSubmitHandler}
        validationSchema={loginFormShape.schema}
    >
        {({ isValid }) => (
            <Form className="sign-in__form">
                <ErrorMessage name="email">
                    {(message) => (
                        <div className="sign-in__message">
                            <p>{message}</p>
                        </div>
                    )}                   
                </ErrorMessage>
                <ErrorMessage name="password">
                    {(message) => (
                        <div className="sign-in__message">
                            <p>{message}</p>
                        </div>
                    )}
                </ErrorMessage>
                <div className="sign-in__fields">
                    <div className="sign-in__field">
                        <Field className="sign-in__input" type="email" placeholder="Email address" name="email"
                            id="user-email"
                        />
                        <label className="sign-in__label visually-hidden" htmlFor="user-email">
                            Email address
                        </label>
                    </div>
                    <div className="sign-in__field">
                        <Field className="sign-in__input" type="password" placeholder="Password" name="password"
                            id="user-password"
                        />
                        <label className="sign-in__label visually-hidden" htmlFor="user-password">
                            Password
                        </label>
                    </div>
                </div>
                <div className="sign-in__submit">
                    <button className="sign-in__btn" type="submit" title="Sign in" disabled={!isValid}>
                        Sign in
                    </button>
                </div>
            </Form>
        )}
    </Formik>
));
