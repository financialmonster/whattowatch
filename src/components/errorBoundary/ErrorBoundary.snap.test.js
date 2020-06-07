import React from 'react';
import renderer from 'react-test-renderer';

import { ErrorBoundary } from './ErrorBoundary';

it(`ErrorBoundary: correctly rendered`, () => {
    const tree = renderer.create(
        <ErrorBoundary>
            Test
        </ErrorBoundary>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
