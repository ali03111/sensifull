import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  ingredMainRed: {
    backgroundColor: '#f5e1c8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.8'),
    paddingHorizontal: wp('4'),
  },
  ingredMainGreen: {
    backgroundColor: '#e6f0cf',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.8'),
    paddingHorizontal: wp('4'),
  },
  allergiesInner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('65'),
  },
  allergiesIcon: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  ingredTextStyle: {
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
    marginLeft: wp('2'),
  },
  allergiesIconGreen: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('1.2'),
  },
});
