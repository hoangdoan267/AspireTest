/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles, BAR_WIDTH} from './styles';
import {AppText} from '../../../../component';

interface Props {
  spending: number;
  limit: number;
}

export const LimitBar = (props: Props) => {
  const {spending, limit} = props;

  const calculateInnerLength = () => {
    if (spending === limit) {
      return '100%';
    } else {
      // 7 is the width of a corner triangle
      if ((spending / limit) * BAR_WIDTH + 7 > BAR_WIDTH) {
        return BAR_WIDTH - 14;
      } else {
        return `${(spending / limit) * 100}%`;
      }
    }
  };

  return (
    <View style={styles.limitBarContainer}>
      <View style={styles.limitBarLabel}>
        <AppText style={styles.barTitle}>Debit card spending limit</AppText>
        <View style={styles.barInformation}>
          <AppText
            style={styles.spending}>{`$${spending.toLocaleString()} `}</AppText>
          <AppText
            style={styles.limit}>{`| $${limit.toLocaleString()}  `}</AppText>
        </View>
      </View>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.innerBar,
            {
              width: calculateInnerLength(),
              borderTopRightRadius: spending === limit ? 30 : 0,
              borderBottomRightRadius: spending === limit ? 30 : 0,
            },
          ]}
        />
        {spending !== limit && spending !== 0 && (
          <View style={styles.triangleCorner} />
        )}
      </View>
    </View>
  );
};
