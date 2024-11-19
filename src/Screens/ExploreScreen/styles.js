import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  topRatedMain: {
    paddingHorizontal: wp('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
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
    resizeMode: 'contain',
    marginHorizontal: wp('4'),
    // paddingHorizontal: wp('4'),
    // paddingVertical: hp('2'),
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: hp('1.5'),
    height: hp('20'),
  },
  popularTitle: {
    fontSize: hp('2.5'),
    color: Colors.white,
    fontWeight: '600',
    width: wp('50'),
  },
  popularBtn: {
    // backgroundColor: Colors.white,
    // width: wp('25'),
    // textAlign: 'center',
    // paddingVertical: hp('.7'),
    // borderRadius: 30,
    // marginVertical: hp('2'),
    // height: hp('4'),
    marginTop: hp('.6'),
  },
  filledIcon: {
    width: wp('10'),
    height: hp('5'),
    resizeMode: 'contain',
  },
  popularBtnText: {
    textAlign: 'center',
    fontSize: hp('1.7'),
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
  titleMain: {
    flexDirection: 'row',
    // alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: hp('1.5'),
  },
  catTitle: {
    fontSize: hp('1.8'),
    color: Colors.white,
    // fontWeight: 600,
    marginTop: hp('0.4'),
  },
  shadow: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: wp('4'),
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  searchText: {
    fontSize: hp('2'),
    color: Colors.black,
    fontWeight: 600,
    paddingHorizontal: wp('4'),
    paddingTop: hp('1.5'),
  },
});
