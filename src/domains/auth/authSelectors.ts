import { TState } from 'types';

const authSelectors = {
    getIsLoggedIn: (state: TState) => state.auth.get(`isLoggedIn`) 
}

export default authSelectors;
