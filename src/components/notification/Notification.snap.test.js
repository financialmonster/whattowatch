import React from 'react';
import renderer from 'react-test-renderer';

import { Notification } from './Notification';

it(`Notification: correctly rendered`, () => {
    const tree = renderer.create(
        <Notification>
            Test
        </Notification>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
