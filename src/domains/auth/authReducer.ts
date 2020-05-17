import { Map } from 'immutable';

import { TAuthState } from './authTypes';

const initialState: TAuthState = {
    isLoggedIn: false
}

const initialStateImmutable = Map(initialState);

const authReducer = (state = initialStateImmutable): typeof initialStateImmutable => {
    return state;
}

export default authReducer;
