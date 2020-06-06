import React from 'react';
import renderer from 'react-test-renderer';
import {  List } from 'immutable';

import { OverviewTab } from './OverviewTab';

it(`OverviewTab: correctly rendered`, () => {
    const tree = renderer.create(
        <OverviewTab eleased={1} runTime={2} genre="Comedy" director="Testee" starring={List()} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
