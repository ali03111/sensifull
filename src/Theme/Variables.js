import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const Colors = {
  primaryColor: '#703383',
  themeYellow: '#FFE100',
  secondaryColor: '#FDED75',
  themeGreen: '#95BB5B',
  themeRed: 'red',
  black: '#000000',
  white: '#ffffff',
  textColor: '#525252',
  gray: 'rgba(45, 45, 45, 0.5)',
  grayBorder: '#D9D9D9',
};

/** FontSize **/
const FontSize = {
  scale12: Math.round(width / 36),
  scale16: Math.round(width / 27),
  scale18: Math.round(width / 24),
  scale20: Math.round(width / 21.5),
  scale24: Math.round(width / 18),
  scale32: Math.round(width / 13.5),
  small: 8,
  medium: 10,
  regular: 12,
  default: 14,
  large: 16,
  xlarge: 18,
  xxlarge: 20,
  xxxlarge: 22,
};

const Sizes = {
  width,
  height,
  h10: Math.round(height * 0.0125),
  h20: Math.round(height * 0.025),
};

export {Colors, FontSize, Sizes};
