import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  loginTop: {
    alignItems: 'center',
    paddingTop: hp('4'),
    marginBottom: hp('1.5'),
  },
  logo: {
    width: wp('60'),
    height: hp('12'),
  },
  logInMain: {
    flexGrow: 1,
    paddingHorizontal: wp('4'),
    // paddingTop: hp('3'),
    // paddingBottom: hp('6'),
  },
  buttonStyle: {
    marginTop: hp('3'),
  },
  lockstyle: {
    flex: 0.5,
  },
  dontHave: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp('-2'),
    width: wp('90'),
  },
  signUpText: {
    color: Colors.secondaryColor,
    fontSize: hp('2'),
    fontWeight: '700',
  },
  inputParent: {
    backgroundColor: 'white',
    paddingHorizontal: wp('4'),
    paddingTop: hp('2.5'),
    paddingBottom: hp('3'),
    borderRadius: 20,
  },
  signUp: {
    color: Colors.white,
    fontSize: hp('3.5'),
    fontWeight: '700',
    paddingBottom: hp('2'),
  },
});
