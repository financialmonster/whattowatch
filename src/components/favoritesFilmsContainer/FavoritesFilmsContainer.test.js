import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FavoritesFilmsContainer } from './FavoritesFilmsContainer';
import { favoritesActions } from 'domains/favorites/favoritesActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`FavoritesFilmsContainer:`, () => {
    it(`should dispatch fetchFavoritesRequest action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());
        
        mount(
            <Provider store={store}>
                <FavoritesFilmsContainer />
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(favoritesActions.fetchFavoritesRequest());
    });
});
