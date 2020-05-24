import { TState } from 'types';

export const getUser = (state: TState) => state.auth.get(`user`);

export const getAuthError = (state: TState) => state.auth.get(`authError`);

export const getIsAuthFetching = (state: TState) => state.auth.get(`isAuthFetching`);

export const getAuthStatusError = (state: TState) => state.auth.get(`authStatusError`);

export const getIsAuthStatusFetching = (state: TState) => state.auth.get(`isAuthStatusFetching`);
