import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const DotGroup = () => {
  return (
    <View style={styles.dotGroup}>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
};
