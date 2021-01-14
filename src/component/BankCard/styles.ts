import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR,
  CARD_WIDTH,
  CARD_HEIGHT,
  CONTAINER_PADDING,
} from '../../helper/Constants';

export const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: PRIMARY_COLOR,
    position: 'absolute',
    top: -CARD_HEIGHT / 3,
    left: CONTAINER_PADDING,
    borderRadius: 12,
    padding: 24,
    // zIndex: 100,
  },
  hideContainer: {
    position: 'absolute',
    right: CONTAINER_PADDING,
    top: -CARD_HEIGHT / 3 - 30,
  },
  hideButton: {
    borderRadius: 6,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'flex-end',
    height: 50,
  },
  hideIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  hideText: {
    color: PRIMARY_COLOR,
    fontSize: 12,
  },
  logoArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoStyle: {
    width: 74,
    height: 21,
  },
  visaLogoArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
  visaLogoStyle: {
    width: 59,
    height: 20,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  cardNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 19,
    letterSpacing: 3.5,
  },
  infoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 19,
    marginRight: 24,
    letterSpacing: 1.56,
    alignItems: 'center',
  },
  cvvText: {
    fontSize: 14,
    // lineHeight: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1.56,
    alignItems: 'center',
    // paddingTop: 8,
  },
  cvvHideText: {
    fontSize: 24,
    // lineHeight: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 3,
    paddingTop: 8,
  },
  cvvSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
