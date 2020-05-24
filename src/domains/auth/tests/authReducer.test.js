import { Map } from 'immutable';

import authReducer from 'domains/auth/authReducer';
import { authActions } from 'domains/auth/authActions';

const initialState = Map({
    user: null,
    authError: null,
    isAuthFetching: false,
    authStatusError: null,
    isAuthStatusFetching: false
});

describe(`AuthReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    });

    it(`should return unchanged state given action with unknown type`, () => {
        expect(authReducer(initialState, {type: `UNKNOWN`})).toEqual(initialState);
    });

    it(`should return right state given action with FETCH_AUTH_REQUEST type`, () => {
        const newState = initialState.set(`authError`, null)
                                    .set(`isAuthFetching`, true);

        expect(authReducer(initialState, authActions.fetchAuthRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_AUTH_SUCCESS type`, () => {
        const newState = initialState.set(`user`, Map({fake: true}))
                                    .set(`isAuthFetching`, false);

        expect(authReducer(initialState, authActions.fetchAuthSuccess({fake: true})))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_AUTH_FAIL type`, () => {
        const newState = initialState.set(`user`, null)
                                    .set(`isAuthFetching`, false)
                                    .set(`authError`, { fake: true });

        expect(authReducer(initialState, authActions.fetchAuthFail({fake: true}))).toEqual(newState);
    });

    it(`should return right state given action with FETCH_AUTH_STATUS_REQUEST type`, () => {
        const newState = initialState.set(`authStatusError`, null)
                                    .set(`isAuthStatusFetching`, true);

        expect(authReducer(initialState, authActions.fetchAuthStatusRequest())).toEqual(newState);
    });

    it(`should return right state given action with FETCH_AUTH_STATUS_SUCCESS type`, () => {
        const newState = initialState.set(`user`, Map({fake: true}))
                                    .set(`isAuthStatusFetching`, false);

        expect(authReducer(initialState, authActions.fetchAuthStatusSuccess({fake: true})))
            .toEqual(newState);
    });

    it(`should return right state given action with FETCH_AUTH_STATUS_FAIL type`, () => {
        const newState = initialState.set(`user`, null)
                                    .set(`isAuthStatusFetching`, false)
                                    .set(`authStatusError`, { fake: true });

        expect(authReducer(initialState, authActions.fetchAuthStatusFail({ fake: true }))).toEqual(newState);
    });

    it(`should return right state given action with AUTH_STATUS_UNAUTHORIZED type`, () => {
        const newState = initialState.set(`user`, null)
                                    .set(`isAuthStatusFetching`, false);

        expect(authReducer(initialState, authActions.authStatusAnauthorized())).toEqual(newState);
    });
});
