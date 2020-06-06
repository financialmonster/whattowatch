import React from 'react';
import renderer from 'react-test-renderer';
import { List } from 'immutable';

import { DetailsTab } from './DetailsTab';

it(`DetailsTab: correctly rendered`, () => {
    const tree = renderer.create(
        <DetailsTab released={1} runTime={2} genre="Comedy" director="Testee" starring={List()} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
