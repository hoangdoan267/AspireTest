import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, CONTAINER_PADDING} from '../../../../helper/Constants';

const LIMIT_WIDTH =
  (Dimensions.get('screen').width - CONTAINER_PADDING * 2 - 24) / 3;

export const styles = StyleSheet.create({
  limitContainer: {
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    borderRadius: 4,
    paddingVertical: 12,
    // paddingHorizontal: 30,
    width: LIMIT_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  limitAmount: {
    color: PRIMARY_COLOR,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
