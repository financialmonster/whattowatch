import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { GenreFilter} from './GenreFilter';
import { filmsActions } from 'domains/films/filmsActions';
import { storeMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`GenreFilter:`, () => {
    it(`should dispatch setFilter action with the right value after click on the genre item`, () => {
        const mockStore = configureStore();
        const store = mockStore(storeMock);

        const genreFilter = mount(
            <Provider store={store}>
                <GenreFilter />
            </Provider>        
        );

        const genreItem = genreFilter.find(`.catalog__genres-link`).at(1);

        genreItem.simulate(`click`);

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(filmsActions.setFilter(`Comedy`));
    });
});
