import { Map } from 'immutable';

import authReducer from 'domains/auth/authReducer';

const initialState = Map({
    isLoggedIn: false
});

describe(`authReducer:`, () => {
    it(`should return initial state given undefined first argument`, () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    });
});
