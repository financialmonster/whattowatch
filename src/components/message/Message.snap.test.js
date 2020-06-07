import React from 'react';
import renderer from 'react-test-renderer';

import { Message } from './Message';

it(`ErrorMessage: correctly rendered`, () => {
    const tree = renderer.create(
        <Message>
            Test
        </Message>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
