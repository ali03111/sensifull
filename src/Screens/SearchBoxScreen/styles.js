import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    backgroundColor: 'transparent',
  },
  styleColor: {
    color: Colors.primaryColor,
  },
  backStyle: {
    tintColor: Colors.black,
  },
  inputImage: {
    width: wp('5'),
    resizeMode: 'contain',
    height: hp('2.5'),
  },
  inputView: {
    width: wp('94'),
    height: hp('6'),
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: Colors.primaryColor,
    paddingHorizontal: wp('2'),
    alignSelf: 'center',
    marginTop: hp('2'),
    paddingLeft: wp('5'),
    marginBottom: hp('2'),
  },
  input: {
    flex: 1,
    height: hp('6'),
    color: 'black',
  },
  searchIcon: {
    width: wp('10'),
    alignItems: 'center',
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
  searchTextStyle: {
    paddingVertical: hp('0.5'),
    paddingHorizontal: wp('3'),
    borderWidth: 1,
    borderColor: Colors.themeGreen,
    borderRadius: 20,
    marginRight: wp('2'),
    marginTop: hp('1'),
  },
  heading: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    marginTop: hp('2'),
    marginLeft: wp('3'),
  },
  searchList: {
    width: wp('93'),
    display: 'flex',
    flexWrap: 'wrap',
    marginHorizontal: wp('3'),
    marginTop: hp('2'),
    height: 'auto',
  },
});
