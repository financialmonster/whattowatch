import { TState } from '../../init/rootReducer';

const authSelectors = {
    getIsLoggedIn: (state: TState): boolean | undefined => state.auth.get(`isLoggedIn`) 
}

export default authSelectors;
