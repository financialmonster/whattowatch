import React from 'react';
import renderer from 'react-test-renderer';

import { ReviewForm } from './ReviewForm';

it(`ReviewForm: correctly rendered`, () => {
    const tree = renderer.create(
        <ReviewForm /> 
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
