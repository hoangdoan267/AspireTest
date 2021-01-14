import React from 'react';

import {Text} from 'react-native';

export const AppText = (props: any) => {
  return <Text {...props}>{props.children}</Text>;
};
