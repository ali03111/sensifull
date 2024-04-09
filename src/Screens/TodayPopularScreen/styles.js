import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  topRatedMain: {
    paddingHorizontal: wp('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: hp('3'),
    paddingBottom: hp('1.5'),
  },
  container: {
    flex: 1,
  },
  arrBack: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  popularMain: {
    // resizeMode: 'contain',
    // marginHorizontal: wp('4'),
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    borderRadius: 20,
    marginVertical: hp('1.5'),
    height: hp('20'),
    width: wp('90'),
  },
  popularTitle: {
    fontSize: hp('2.5'),
    color: Colors.black,
    fontWeight: '600',
    width: wp('50'),
  },
  popularBtn: {
    borderWidth: 0.5,
    width: wp('27'),
    textAlign: 'center',
    paddingVertical: hp('1'),
    borderRadius: 30,
    marginVertical: hp('2'),
  },
  popularBtnText: {
    textAlign: 'center',
    fontSize: hp('1.8'),
    color: Colors.black,
  },
  topRated: {
    fontSize: hp('2.5'),
    color: Colors.primaryColor,
    fontWeight: '600',
  },
  viewAll: {
    fontSize: hp('2.5'),
    color: Colors.white,
    fontWeight: 600,
  },
  popularTop: {
    paddingVertical: hp('2'),
  },
  innerView: {
    position: 'absolute',
    left: wp('4'),
    bottom: hp('1.5'),
    zIndex: 1,
  },
  flatStyle: {
    paddingBottom: Platform.OS == 'ios' ? hp('25') : hp('20'),
    flexGrow: 1,
    alignSelf: 'center',
  },
});
