import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_COLOR, CONTAINER_PADDING} from '../../../../helper/Constants';

export const BAR_WIDTH = Dimensions.get('screen').width - CONTAINER_PADDING * 2;

export const styles = StyleSheet.create({
  barTitle: {
    fontSize: 13,
  },
  barInformation: {
    fontSize: 13,
    flexDirection: 'row',
  },
  spending: {
    fontSize: 13,
    color: PRIMARY_COLOR,
  },
  limit: {
    fontSize: 13,
    color: '#22222233',
  },
  limitBarContainer: {
    marginTop: 32,
  },
  limitBarLabel: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  barContainer: {
    width: BAR_WIDTH,
    height: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(1, 209, 103, 0.1)',
    flexDirection: 'row',
  },
  innerBar: {
    height: 15,
    backgroundColor: PRIMARY_COLOR,
    width: '20%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 7,
    borderTopWidth: 15,
    borderRightColor: 'transparent',
    borderTopColor: PRIMARY_COLOR,
  },
});
