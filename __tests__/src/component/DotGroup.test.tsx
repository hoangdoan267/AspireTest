import React from 'react';
import renderer from 'react-test-renderer';
import {DotGroup} from '../../../src/component';

test('render correctly', () => {
  const snapshot = renderer.create(<DotGroup />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
