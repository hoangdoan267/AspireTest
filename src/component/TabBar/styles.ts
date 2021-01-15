import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    // height: 56,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
  },
  tabBarTitle: {
    fontSize: 9,
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginBottom: 3,
  },
});
