import React from 'react';
import renderer from 'react-test-renderer';
import {MoneyTag} from '../../../src/component';

test('render correctly with value', () => {
  const snapshot = renderer.create(<MoneyTag value={2000} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});

test('render correctly with textStyle prop', () => {
  const snapshot = renderer
    .create(<MoneyTag value={2000} textStyle={{color: 'black'}} />)
    .toJSON();

  expect(snapshot).toMatchSnapshot();
});
