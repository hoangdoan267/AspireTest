import {StyleSheet} from 'react-native';
import {
  CONTAINER_PADDING,
  CARD_HEIGHT,
  COLOR_BLUE,
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
    paddingTop: (CARD_HEIGHT * 2) / 3,
    paddingBottom: 80,
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
    // paddingBottom: 56,
    // flex: 1,
  },
  sectionContentStyle: {
    paddingHorizontal: CONTAINER_PADDING,
    // marginTop: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 24,
  },
  contentText: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 15,
  },
});
