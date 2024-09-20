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
});
