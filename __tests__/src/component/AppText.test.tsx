import React from 'react';
import renderer from 'react-test-renderer';
import {AppText} from '../../../src/component';

test('render correctly', () => {
  const snapshot = renderer.create(<AppText>Hello World</AppText>).toJSON();

  expect(snapshot).toMatchSnapshot();
});
