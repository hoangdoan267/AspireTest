import React from 'react';
import renderer from 'react-test-renderer';
import {BankCard} from '../../../src/component';

test('render correctly with value', () => {
  const snapshot = renderer
    .create(
      <BankCard
        cardInformation={{
          name: 'Mark Henry',
          cardNumber: '5647341124132020',
          expired: '12/20',
          cvv: '456',
        }}
      />,
    )
    .toJSON();

  expect(snapshot).toMatchSnapshot();
});
