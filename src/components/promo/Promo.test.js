import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { fromJS } from 'immutable';

import Promo from './Promo';

Enzyme.configure({adapter: new Adapter()});

const mockPromo = fromJS({
    genre: ``,
    name: ``,
    poster_image: ``,
    released: 0,
    run_time: 0,
    video_link: ``,
    preview_image: ``
});

describe(`Promo:`, () => {
    it(`the play method should be invoked on click on the play button`, () => {
        const promo = mount(<Promo promo={mockPromo} />);
        const playBtn = promo.find(`.btn--play`);
        const play = jest.fn();
        
        window.HTMLVideoElement.prototype.play = play;

        playBtn.simulate(`click`);

        expect(play).toHaveBeenCalledTimes(1);
        expect(play.mock.calls[0][0]).toEqual(void 0);
    });
});
