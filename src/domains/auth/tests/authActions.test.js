import { authActions } from 'domains/auth/authActions';
import { AuthActionTypes } from 'domains/auth/authConstants';

describe(`Auth actions:`, () => {
    it(`fetchAuthRequest should return the right value`, () => {
        expect(authActions.fetchAuthRequest({alsoFake: true})).toEqual({
            type: AuthActionTypes.FETCH_AUTH_REQUEST,
            payload: {alsoFake: true}
        });
    });

    it(`fetchAuthSuccess should return the right value`, () => {
        expect(authActions.fetchAuthSuccess({fake: true})).toEqual({
            type: AuthActionTypes.FETCH_AUTH_SUCCESS,
            payload: {fake: true}
        });
    });

    it(`fetchAuthFail should return the right value`, () => {
        expect(authActions.fetchAuthFail({error: true})).toEqual({
            type: AuthActionTypes.FETCH_AUTH_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`fetchAuthStatusRequest should return the right value`, () => {
        expect(authActions.fetchAuthStatusRequest()).toEqual({
            type: AuthActionTypes.FETCH_AUTH_STATUS_REQUEST
        });
    });

    it(`fetchAuthStatusSuccess should return the right value`, () => {
        expect(authActions.fetchAuthStatusSuccess({fake: true})).toEqual({
            type: AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS,
            payload: {fake: true}
        });
    });

    it(`fetchAuthStatusFail should return the right value`, () => {
        expect(authActions.fetchAuthStatusFail({error: true})).toEqual({
            type: AuthActionTypes.FETCH_AUTH_STATUS_FAIL,
            error: true,
            payload: {error: true}
        });
    });

    it(`authStatusAnauthorized should return the right value`, () => {
        expect(authActions.authStatusAnauthorized()).toEqual({
            type: AuthActionTypes.AUTH_STATUS_UNAUTHORIZED
        });
    });

    it(`resetAuthError should return the right value`, () => {
        expect(authActions.resetAuthError()).toEqual({
            type: AuthActionTypes.RESET_AUTH_ERROR
        });
    });
});
