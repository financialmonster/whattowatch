import { Map } from 'immutable';

import { AuthActionTypes } from './authConstants';
import { TUserData, TUser } from 'types';

export type TFetchAuthRequest = {
    type: typeof AuthActionTypes.FETCH_AUTH_REQUEST,
    payload: TUserData
}

type TFetchAuthSuccess = {
    type: typeof AuthActionTypes.FETCH_AUTH_SUCCESS,
    payload: TUser
}

type TFetchAuthFail = {
    type: typeof AuthActionTypes.FETCH_AUTH_FAIL,
    error: boolean,
    payload: Error
}

type TFetchAuthStatusRequest = {
    type: typeof AuthActionTypes.FETCH_AUTH_STATUS_REQUEST
}

type TFetchAuthStatusSuccess = {
    type: typeof AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS,
    payload: TUser
}

type TFetchAuthStatusFail = {
    type: typeof AuthActionTypes.FETCH_AUTH_STATUS_FAIL,
    error: boolean,
    payload: Error
}

type TAuthStatusAnauthorized = {
    type: typeof AuthActionTypes.AUTH_STATUS_UNAUTHORIZED
}

type TResetAuthError = {
    type: typeof AuthActionTypes.RESET_AUTH_ERROR
}

export type TAuthActions = TFetchAuthRequest | TFetchAuthSuccess | TFetchAuthFail | TFetchAuthStatusRequest
    | TFetchAuthStatusSuccess | TFetchAuthStatusFail | TAuthStatusAnauthorized | TResetAuthError;

export type TAuthState = {
    user: null | Map<string, any>;
    authError: null | Error;
    isAuthFetching: boolean;
    authStatusError: null | Error;
    isAuthStatusFetching: boolean;
}
