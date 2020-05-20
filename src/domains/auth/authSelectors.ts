import { TState } from 'types';

export const getIsLoggedIn = (state: TState) => state.auth.get(`isLoggedIn`);
