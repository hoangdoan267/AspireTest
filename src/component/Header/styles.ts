import {StyleSheet} from 'react-native';
import {CONTAINER_PADDING} from '../../helper/Constants';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: CONTAINER_PADDING,
    paddingVertical: 10,
  },
  logoStyle: {
    width: 25,
    height: 25,
  },
});
