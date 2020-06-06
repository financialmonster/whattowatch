import React from 'react';
import renderer from 'react-test-renderer';

import { Spinner } from './Spinner';

it(`Spinner: correctly rendered`, () => {
    const tree = renderer.create(
        <Spinner />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
