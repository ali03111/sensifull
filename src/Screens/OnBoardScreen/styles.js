import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  dotList: {
    flexDirection: 'row',
    width: wp('25'),
    // height: hp('15'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // marginTop: hp('0'),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: wp('3'),
    position: 'absolute',
    bottom: hp('2'),
    zIndex: 2,
    width: wp('93.5'),
  },
  centerMainView: {
    width: wp('100'),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
    marginTop: hp('0'),
  },
  centerHeading: {
    fontSize: hp('4.4'),
    // fontFamily: fontFamily.bold,
    // marginVertical: hp('2'),
    paddingHorizontal: wp('4'),
    width: wp('100'),
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '700',
  },
  centerText: {
    fontSize: hp('2.2'),
    // fontFamily: fontFamily.regular,
    paddingHorizontal: wp('5'),
    width: wp('100'),
    textAlign: 'center',
    color: Colors.white,
    lineHeight: hp('4'),
  },
  dot: (currentIndex, index) => ({
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    height: Dimensions.get('window').width * 0.016,
    width:
      currentIndex == index
        ? Dimensions.get('window').width * 0.09
        : Dimensions.get('window').width * 0.04,
    backgroundColor: currentIndex == index ? Colors.primaryColor : Colors.white,
    borderWidth: currentIndex == index ? 1 : 1,
    borderColor: currentIndex == index ? Colors.primaryColor : Colors.black,
  }),
  bannerImg: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('100'),
    // width: wp('100'),
  },
  btnArrow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('14'),
    height: hp('7'),
    backgroundColor: '#703383',
    borderRadius: 50,
  },
  nextBtn: {
    position: 'absolute',
    // top: 0,
    left: 0,
    right: 0,
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    // fontFamily: fontFamily.medium,
    fontSize: hp('1.8'),
    paddingRight: wp('1'),
    color: Colors.white,
    lineHeight: 16,
  },
  hdStyle: {
    fontSize: hp('3.5'),
    fontWeight: '700',
    color: Colors.primaryColor,
    marginTop: hp('-.3'),
  },
  descStyle: {
    textAlign: 'center',
    color: Colors.textColor,
    fontSize: hp('1.8'),
    lineHeight: 17,
    paddingHorizontal: wp('18'),
    marginTop: hp('1.3'),
  },
  splashImg: {
    width: wp('60'),
    height: hp('30'),
    marginBottom: hp('1'),
  },

  skipText: {
    color: '#525252',
  },
});
