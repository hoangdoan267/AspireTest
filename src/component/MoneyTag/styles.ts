import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../helper/Constants';
export const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginRight: 10,
  },
  tagText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  balanceText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
