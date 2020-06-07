import { AuthActionTypes }  from './authConstants';
import { TAuthActions } from './authTypes';
import { TUserData, TUser } from 'types';

export const authActions = {
    fetchAuthRequest: (userData: TUserData): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_REQUEST,
        payload: userData
    }),

    fetchAuthSuccess: (user: TUser): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_SUCCESS,
        payload: user
    }),

    fetchAuthFail: (error: Error): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_FAIL,
        error: true,
        payload: error
    }),

    fetchAuthStatusRequest: (): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_STATUS_REQUEST
    }),

    fetchAuthStatusSuccess: (user: TUser): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS,
        payload: user
    }),

    fetchAuthStatusFail: (error: Error): TAuthActions => ({
        type: AuthActionTypes.FETCH_AUTH_STATUS_FAIL,
        error: true,
        payload: error
    }),

    authStatusAnauthorized: (): TAuthActions => ({
        type: AuthActionTypes.AUTH_STATUS_UNAUTHORIZED
    }),

    resetAuthError: (): TAuthActions => ({
        type: AuthActionTypes.RESET_AUTH_ERROR
    }),
}
