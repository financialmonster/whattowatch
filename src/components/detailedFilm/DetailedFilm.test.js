/* eslint-disable import/first */
const mockNavLinkClickHandler = jest.fn();

jest.mock(`hooks/useDetailedFilmTabs`, () => ({
    useDetailedFilmTabs: () => ({
        navLinkClickHandler: mockNavLinkClickHandler
   })
}));

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Map } from 'immutable';
import Adapter from 'enzyme-adapter-react-16';

import { DetailedFilm } from './DetailedFilm';

Enzyme.configure({adapter: new Adapter()});

describe(`DetailedFilm:`, () => {
    it(`the navLinkClickHandler callback should be invoked with the right value on click on the navLink`, async () => {
        const detailedFilm = shallow(
            <DetailedFilm film={Map()} />
        );

        const detailsTabLink = detailedFilm.find(`.movie-nav__link`).at(1);

        detailsTabLink.simulate(`click`);

        expect(mockNavLinkClickHandler).toHaveBeenCalledTimes(1);
        expect(mockNavLinkClickHandler.mock.calls[0][0]).toEqual(`Details`);
    });
});
