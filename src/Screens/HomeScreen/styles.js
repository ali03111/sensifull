import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    paddingTop: Platform.OS == 'ios' ? hp('6') : hp('3.5'),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unlockHeading: {
    fontSize: hp('1.8'),
    color: 'white',
    width: wp('50'),
  },
  premiumBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE100',
    borderRadius: 30,
    paddingHorizontal: wp('3'),
    paddingVertical: hp('.8'),
  },
  starImage: {
    resizeMode: 'contain',
    width: wp('4'),
    height: hp('2'),
    marginRight: wp('1.5'),
    position: 'relative',
    bottom: 1,
    resizeMode: 'contain',
  },
  premiumText: {
    color: '#FFE100',
    fontSize: hp('1.6'),
  },
  notifyMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2.5'),
    alignItems: 'center',
  },
  notifyinner: {},
  notifyText: {
    fontSize: hp('2.5'),
    color: 'white',
    fontWeight: '600',
    width: wp('60'),
    lineHeight: 22,
  },
  notifyBtn: {
    marginHorizontal: wp('4'),
  },
  notifyImage: {
    width: wp('7'),
    height: hp('3.5'),
    resizeMode: 'contain',
  },
  inputMain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: wp('4'),
    width: wp('92'),
    marginTop: hp('2'),
  },
  inputStyle: {
    width: wp('67'),
    color: '#fff',
    height: hp('5'),
  },
  inputImage: {
    width: wp('5'),
    resizeMode: 'contain',
    marginRight: wp('2'),
    tintColor: '#fff',
    height: hp('2.5'),
  },
  filterMain: {
    borderLeftWidth: 1,
    borderLeftColor: '#fff',
    paddingLeft: wp('3'),
  },
  filterImage: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
  },
  homeMain: {
    paddingHorizontal: wp('4'),
  },
  ingredArea: {
    flexDirection: 'row',
    marginVertical: hp('3'),
    justifyContent: 'space-between',
  },
  ingredTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ingredBtn: {
    width: wp('44'),
    borderRadius: 15,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1.5'),
  },
  ingredBtnRed: {
    backgroundColor: '#FFF4A3',
  },
  ingredBtnGreen: {
    backgroundColor: '#95BB5B',
  },
  ingredIcon: {
    width: wp('5'),
    height: hp('3'),
    resizeMode: 'contain',
  },
  ingredientText: {
    fontSize: hp('2'),
    fontWeight: '600',
    color: '#703383',
    width: wp('25'),
    lineHeight: 18,
  },
  ingredArrow: {
    width: wp('6'),
    resizeMode: 'contain',
    height: hp('3'),
    marginBottom: hp('1'),
  },
  topRatedMain: {
    paddingHorizontal: wp('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('.5'),
  },
  topRated: {
    fontSize: hp('2.5'),
    color: Colors.primaryColor,
    fontWeight: '600',
  },
  viewAll: {
    fontSize: hp('1.8'),
    color: '#525252',
  },
  mealItem: {
    width: wp('53'),
    alignItems: 'center',
    marginHorizontal: wp('2'),
    marginVertical: hp('2'),
  },
  mealImage: {
    width: wp('30'),
    height: hp('15'),
    marginBottom: hp('-8'),
    zIndex: 9,
    resizeMode: 'contain',
  },
  mealTitle: {
    fontSize: hp('2'),
    color: Colors.black,
    fontWeight: '600',
    borderWidth: 0.5,
    borderColor: '#202020',
    width: wp('53'),
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: wp('2'),
    paddingTop: hp('9'),
    paddingBottom: hp('2'),
    borderRadius: 20,
  },
  popular: {
    paddingHorizontal: wp('4'),
    marginTop: hp('1'),
  },
  popularTop: {
    // paddingBottom: hp('1'),
  },
  popularMain: {
    resizeMode: 'contain',
    marginHorizontal: wp('2'),
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: hp('2'),
    width: wp('85'),
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
  recomMain: {
    marginTop: hp('1'),
  },
  recom: {
    width: wp('27'),
    marginHorizontal: wp('2'),
  },
  recomImage: {
    resizeMode: 'contain',
    width: wp('27'),
    height: hp('13.5'),
  },
  recomTitle: {
    textAlign: 'center',
    fontSize: hp('1.8'),
    color: Colors.black,
    fontWeight: '600',
    marginVertical: hp('1'),
  },
  // ----
  MealPlan: {
    resizeMode: 'contain',
    marginHorizontal: wp('4'),
    paddingHorizontal: wp('4'),
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: hp('3'),
    width: wp('92'),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('22'),
  },
  MealPlanTitle: {
    fontSize: hp('2.5'),
    color: '#202020',
    fontWeight: '600',
  },
  mealPlanPara: {
    fontSize: hp('1.6'),
    color: '#525252',
    paddingTop: hp('.8'),
    paddingBottom: hp('2.8'),
  },
  mealPlanBtn: {
    // borderWidth: 0.5,
  },
  mealPlanBtnText: {
    textAlign: 'center',
    fontSize: hp('1.8'),
    color: Colors.white,
    width: wp('27'),
    textAlign: 'center',
    paddingVertical: hp('1'),
    borderRadius: 8,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden',
  },
  shoppingBtn: {
    backgroundColor: '#FFF4A3',
    marginHorizontal: wp('4'),
    paddingHorizontal: wp('4'),
    paddingVertical: hp('.5'),
    marginBottom: hp('3'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },
  shoppingText: {
    width: wp('68'),
    fontSize: hp('2'),
    fontWeight: '600',
    color: '#703383',
  },
  shoppingIcon: {
    width: wp('7'),
    resizeMode: 'contain',
  },
  RightPurpleIcon: {
    width: wp('5'),
    resizeMode: 'contain',
  },
});
