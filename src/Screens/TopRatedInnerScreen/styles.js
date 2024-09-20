import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  headerBg: {
    backgroundColor: 'transparent',
  },
  styleColor: {
    color: Colors.primaryColor,
  },
  backStyle: {
    tintColor: Colors.black,
  },
  container: {
    flex: 1,
  },
  bgTabs: {
    flex: 1,
    resizeMode: 'contain',
    // paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
  },
  mealImage: {
    resizeMode: 'contain',
    borderRadius: 20,
    height: hp('24'),
    marginBottom: hp('2'),
    backgroundColor: 'gray',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  mealmain: {
    paddingHorizontal: wp('4'),
    marginTop: hp('.7'),
    marginBottom: hp('2.5'),
  },
  imageBtn: {
    backgroundColor: Colors.primaryColor,
    color: Colors.white,
    textAlign: 'center',
    borderRadius: 10,
    paddingVertical: hp('.5'),
    // paddingBottom: hp('.6'),
    alignSelf: 'flex-end',
    paddingHorizontal: wp('3'),
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    fontSize: hp('1.8'),
    overflow: 'hidden',
    position: 'absolute',
    right: wp('1'),
    zIndex: 1,
  },
  titleMain: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: hp('2.5'),
    color: Colors.black,
    fontWeight: 600,
  },
  category: {
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
    fontWeight: 400,
  },
  description: {
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
    fontWeight: 400,
    marginTop: hp('.7'),
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.primaryColor,
    height: hp('0.3'),
    width: wp('28'),
    alignSelf: 'center',
    marginLeft: wp('3.3'),
  },
  tabMain: {
    flex: 1,
  },
  ingredMain: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  dataMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('1'),
  },
  NameStyle: {
    fontSize: hp('1.6'),
    color: Colors.textGrayColor,
  },
  gramsStyle: {
    fontSize: hp('1.6'),
    color: Colors.textGrayColor,
  },
  separatorStyle: {
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.textGrayColor,
  },
  directionDataMain: {
    flexDirection: 'row',
    paddingVertical: hp('1'),
  },
  numberStyle: {
    flex: 0.1,
    fontSize: hp('1.6'),
    color: Colors.textGrayColor,
  },
  textStyle: {
    flex: 2,
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
  },
  ingredMainRed: {
    backgroundColor: '#f5e1c8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.8'),
    paddingHorizontal: wp('4'),
  },
  ingredMainGreen: {
    backgroundColor: '#e6f0cf',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.8'),
    paddingHorizontal: wp('4'),
  },
  allergiesInner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('65'),
  },
  allergiesIcon: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  ingredTextStyle: {
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
    marginLeft: wp('2'),
  },
  allergiesIconGreen: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('1.2'),
  },
  popUpTitle: {
    fontSize: hp('1.8'),
    color: Colors.textGrayColor,
    textDecorationLine: 'underline',
  },
  nutritionTabs: {
    flex: 1,
    resizeMode: 'contain',
    paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
  },
  directionTabs: {
    flex: 1,
    resizeMode: 'contain',
    paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
  },
  saveBtn: {
    width: wp('94'),
    height: hp('7'),
    marginLeft: wp('3'),
    marginRight: wp('2'),
    marginTop: hp('1'),
    marginBottom: Platform.OS == 'ios' ? hp('4') : hp('2'),
    alignSelf: 'center',
  },
  servingButton: {
    backgroundColor: Colors.lightYellow,
    width: wp('93'),
    height: hp('6'),
    marginLeft: wp('3'),
    marginRight: wp('2'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('2.5'),
  },
  btnText: {
    fontSize: hp('1.8'),
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});
