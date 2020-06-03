/* eslint-disable import/first */
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({id: 1}),
    useLocation: () => ({pathname: `${process.env.PUBLIC_URL}film/1`})
}));

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { createStoreMock, mockedFilm } from 'mocks';
import { DetailedFilm } from './DetailedFilm';

Enzyme.configure({adapter: new Adapter()});

describe(`DetailedFilm:`, () => {
    it(`the DetailsTab component should be rendered after the click on the corresponding link`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());

        const detailedFilm = mount(
            <Provider store={store}>
                <DetailedFilm film={mockedFilm} />
            </Provider>
        );

        const detailsTabLink = detailedFilm.find(`.movie-nav__link`).at(1);
        detailsTabLink.simulate(`click`);

        const detailsTabItem = detailedFilm.find(`.movie-nav__item--active`);

        expect(detailsTabItem.childAt(0).text()).toEqual(`Details`);
    });
});
