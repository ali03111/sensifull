import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Platform.OS == 'ios' ? hp('70') : hp('73'),
  },
  heading: {
    color: Colors.primaryColor,
    fontSize: hp('4'),
    fontWeight: 'bold',
  },
  btn: {width: wp('90'), alignSelf: 'center'},
  cameraView: {
    // backgroundColor: Colors.lightBorder,
    width: wp('100'),
    height: hp('100'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  barView: {
    width: wp('90'),
    height: hp('12'),
    marginTop: hp('-20'),
    borderRadius: 10,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    backgroundColor: Colors.lightBorder,
  },
});
