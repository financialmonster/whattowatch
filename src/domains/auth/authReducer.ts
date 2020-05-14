import { Map } from 'immutable';

type TAuthState = {
    isLoggedIn: boolean;
}

const initialState: TAuthState = {
    isLoggedIn: false
}

const initialStateImmutable = Map(initialState);

const authReducer = (state = initialStateImmutable) => {
    return state;
}

export default authReducer;
