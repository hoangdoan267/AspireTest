import React from 'react';
import renderer from 'react-test-renderer';
import {FunctionalItem} from '../../../src/component';
import {Image} from 'react-native';

import {render, fireEvent} from '@testing-library/react-native';

describe('render FunctionalItem', () => {
  test('render correctly', () => {
    const snapshot = renderer
      .create(
        <FunctionalItem
          name="Hello World"
          content="Lorem ipsum"
          icon={
            <Image source={require('../../../src/assets/images/limit.png')} />
          }
        />,
      )
      .toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  test('render with switch', () => {
    let onActionMock = jest.fn();

    const snapshot = renderer
      .create(
        <FunctionalItem
          name="Hello World"
          content="Lorem ipsum"
          haveSwitch
          icon={
            <Image source={require('../../../src/assets/images/limit.png')} />
          }
          onChange={onActionMock}
        />,
      )
      .toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
