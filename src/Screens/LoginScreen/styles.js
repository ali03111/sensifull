import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  logInMain: {
    // paddingHorizontal: wp('3.5'),
  },
  loginTop: {
    alignItems: 'center',
    marginBottom: hp('4'),
  },
  mainImage: {
    width: wp('100'),
    height: hp('40'),
    // backgroundColor: 'red',
  },
  logo: {
    width: wp('60'),
    height: hp('9'),
  },
  signInText: {
    textAlign: 'center',
    marginTop: hp('1'),
    fontSize: hp('1.8'),
  },
  loginBottom: {
    paddingHorizontal: wp('3.5'),
  },
  rememberSec: {
    marginBottom: hp('3.5'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1'),
  },
  rememberInner: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  tickIcon: {
    marginRight: wp('2'),
    resizeMode: 'contain',
    height: hp('3'),
    width: wp('6'),
  },
  tickText: {
    color: Colors.gray,
    fontSize: hp('1.9'),
    fontWeight: '400',
  },
  forgetText: {
    flex: 1,
    textAlign: 'right',
    fontSize: hp('1.9'),
    color: Colors.primaryColor,
  },
  lockstyle: {
    flex: 0.5,
  },
  dontHave: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('3'),
    marginBottom: hp('2'),
  },
  dontHaveText: {
    fontSize: hp('1.9'),
    fontWeight: '400',
    color: Colors.black,
    marginRight: wp('4'),
  },
  signUpText: {
    color: Colors.primaryColor,
    fontSize: hp('1.9'),
  },
});
