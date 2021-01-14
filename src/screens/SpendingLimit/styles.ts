import {StyleSheet} from 'react-native';
import {
  CONTAINER_PADDING,
  COLOR_BLUE,
  PRIMARY_COLOR,
} from '../../helper/Constants';

export const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: COLOR_BLUE,
    flex: 1,
  },
  safeAreaContainer: {
    position: 'relative',
  },
  contentContainer: {
    backgroundColor: 'white',
    position: 'relative',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: CONTAINER_PADDING,
    flex: 1,
  },
  imageStyle: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: COLOR_BLUE,
  },
  parallaxStyle: {
    flex: 1,
  },
  sectionContentStyle: {
    paddingHorizontal: CONTAINER_PADDING,
    // marginTop: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  contentText: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 15,
  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  featureText: {
    fontSize: 14,
    marginLeft: 12,
  },
  featureSubText: {
    fontSize: 13,
    color: 'rgba(34, 34, 34, 0.4)',
  },
  feature: {
    flexDirection: 'row',
    marginBottom: 19,
  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#E5E5E5',
    marginVertical: 12,
  },
  limitAmountContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    marginTop: 'auto',
    marginHorizontal: CONTAINER_PADDING,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    elevation: 4,
  },
  saveText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
});
