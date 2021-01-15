import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {AppText} from '..';

interface Props {
  value?: number;
  textStyle?: any;
}

export const MoneyTag = (props: Props) => {
  const {value, textStyle} = props;

  return (
    <View style={styles.tagContainer}>
      <View style={styles.tag}>
        <AppText style={styles.tagText}>S$</AppText>
      </View>
      <AppText style={[styles.balanceText, {...textStyle}]}>
        {value?.toLocaleString()}
      </AppText>
    </View>
  );
};
