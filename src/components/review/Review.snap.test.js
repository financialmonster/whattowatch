import React from 'react';
import renderer from 'react-test-renderer';
import { Map } from 'immutable';

import { Review } from './Review';

it(`Review: correctly rendered`, () => {
    const tree = renderer.create(
        <Review review={Map()} />  
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
