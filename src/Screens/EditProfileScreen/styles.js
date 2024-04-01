import {Dimensions, Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  logInMain: {
    // paddingHorizontal: wp('3.5'),
    flexGrow: 1,
    // backgroundColor: 'red',
  },
  bgStyle: {
    paddingBottom: hp('13'),
    paddingTop: Platform.OS == 'ios' ? hp('3') : 0,
    flex: 1,
  },
  heading: {
    marginVertical: hp('1'),
    fontSize: hp('3'),
    fontWeight: '400',
  },
  loginTop: {
    alignItems: 'center',
    paddingTop: hp('3.5'),
    marginBottom: hp('1.5'),
  },
  mainImage: {
    width: wp('100'),
    height: hp('40'),
    // backgroundColor: 'red',
  },
  logo: {
    width: wp('60'),
    height: hp('12'),
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
    marginBottom: hp('3'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2.5'),
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
    flex: 0.3,
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
  signUpText: {
    color: Colors.secondaryColor,
    fontSize: hp('2'),
    fontWeight: '700',
  },
  dontHave: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: hp('-2'),
    width: wp('90'),
  },
  barMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4'),
    marginTop: hp('5'),
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
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.17,
    height: Dimensions.get('window').width * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  socialImage: {
    width: wp('7'),
    height: hp('3.5'),
  },
  logBtn: {
    marginTop: hp('4'),
  },
  profileView: {
    width: Dimensions.get('window').width * 0.31,
    height: Dimensions.get('window').width * 0.31,
  },
  addIcon: {
    position: 'absolute',
    left: wp('14'),
    height: hp('6'),
    top: hp('8'),
  },
  whiteCircle: {
    // height: hp('22'),
    // width: wp('32'),
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
