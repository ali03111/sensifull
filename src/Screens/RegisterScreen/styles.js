import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  loginTop: {
    alignItems: 'center',
    paddingTop: hp('3.5'),
    marginBottom: hp('1.5'),
    marginBottom: hp('1.5'),
  },
  logo: {
    width: wp('60'),
    height: hp('12'),
  },
  logInMain: {
    flexGrow: 1,
    // paddingHorizontal: wp('4'),
    // paddingTop: hp('3'),
    // paddingBottom: hp('6'),
  },
  bgStyle: {
    height: Dimensions.get('window').height,
    paddingBottom: hp('0'),
    paddingTop: Platform.OS == 'ios' ? hp('3') : 0,
  },
  buttonStyle: {
    marginTop: hp('1'),
  },
  lockstyle: {
    flex: 0.3,
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
    marginHorizontal: wp('4'),
    paddingTop: hp('1.2'),
    paddingBottom: hp('2.2'),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },
  signUp: {
    color: Colors.white,
    fontSize: hp('3.5'),
    fontWeight: '700',
    paddingBottom: hp('2'),
    paddingHorizontal: wp('4'),
  },
  barMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2'),
  },
  barLine: {
    width: wp('28'),
    borderBottomWidth: 1,
    height: hp('.5'),
  },
  barText: {
    paddingHorizontal: wp('4'),
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('75'),
    alignSelf: 'center',
    paddingBottom: hp('2'),
  },
  socialIcons: {
    width: wp('15'),
    height: hp('7.5'),
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: hp('2'),
  },
  socialImage: {
    width: wp('7'),
    height: hp('3.5'),
  },
});
