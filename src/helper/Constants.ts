import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const PRIMARY_COLOR = '#01D167';

export const COLOR_BLUE = '#0C365A';

export const CARD_WIDTH = (366 / 414) * screenWidth;

export const CARD_HEIGHT = (220 / 414) * screenWidth;

export const CONTAINER_PADDING = (screenWidth - CARD_WIDTH) / 2;

export const PARALLAX_HEIGHT = (260 * Dimensions.get('screen').height) / 667;
