import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { FilmsListContainer } from './FilmsListContainer';
import { filmsActions } from 'domains/films/filmsActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`FilmsListContainer:`, () => {
    it(`should dispatch fetchFilmsRequest action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());
        
        mount(
            <Provider store={store}>
                <FilmsListContainer />
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(filmsActions.fetchFilmsRequest());
    });
});
