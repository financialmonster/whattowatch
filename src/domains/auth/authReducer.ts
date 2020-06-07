import { Map } from 'immutable';

import { TAuthState, TAuthActions } from './authTypes';
import { AuthActionTypes } from './authConstants';

const initialState: TAuthState = {
    user: null,
    authError: null,
    isAuthFetching: false,
    authStatusError: null,
    isAuthStatusFetching: false
}

const initialStateImmutable = Map(initialState);

const authReducer = (state = initialStateImmutable, action: TAuthActions): typeof initialStateImmutable => {
    switch (action.type) {
        case AuthActionTypes.FETCH_AUTH_REQUEST:
            return state.set(`authError`, null)
                        .set(`isAuthFetching`, true);

        case AuthActionTypes.FETCH_AUTH_SUCCESS:
            return state.set(`user`, Map(action.payload))
                        .set(`isAuthFetching`, false); 
                
        case AuthActionTypes.FETCH_AUTH_FAIL:
            return state.set(`user`, null)
                        .set(`isAuthFetching`, false)
                        .set(`authError`, action.payload);

        case AuthActionTypes.FETCH_AUTH_STATUS_REQUEST:
            return state.set(`authStatusError`, null)
                        .set(`isAuthStatusFetching`, true);

        case AuthActionTypes.FETCH_AUTH_STATUS_SUCCESS:
            return state.set(`user`, Map(action.payload))
                        .set(`isAuthStatusFetching`, false);

        case AuthActionTypes.FETCH_AUTH_STATUS_FAIL:
            return state.set(`user`, null)
                        .set(`isAuthStatusFetching`, false)
                        .set(`authStatusError`, action.payload);

        case AuthActionTypes.AUTH_STATUS_UNAUTHORIZED:
            return state.set(`user`, null)
                        .set(`isAuthStatusFetching`, false);

        case AuthActionTypes.RESET_AUTH_ERROR:
            return state.set(`authError`, null);

        default:
            // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
            const x: never = action;
    }

    return state;
}

export default authReducer;
