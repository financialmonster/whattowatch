import React from 'react';
import renderer from 'react-test-renderer';

import { RadioBtn } from './RadioBtn';

it(`RadioBtn: correctly rendered`, () => {
    const tree = renderer.create(
        <RadioBtn value={5} groupValue="test" field={{onBlur: () => {}, onChange: () => {}}} disabled />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
