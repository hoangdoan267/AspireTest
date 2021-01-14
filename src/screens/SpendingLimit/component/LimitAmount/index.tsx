import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {AppText} from '../../../../component';

interface Props {
  value: number;
  onChoose: () => void;
}

export const LimitAmount = (props: Props) => {
  const {value, onChoose} = props;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.limitContainer}
      onPress={onChoose}>
      <AppText style={styles.limitAmount}>S$ {value.toLocaleString()}</AppText>
    </TouchableOpacity>
  );
};
