import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    paddingTop: hp('3.5'),
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
    width: wp('60'),
  },
  premiumBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE100',
    borderRadius: 30,
    paddingHorizontal: wp('3'),
  },
  starImage: {
    resizeMode: 'contain',
    width: wp('4'),
    marginRight: wp('1.5'),
    position: 'relative',
    bottom: 1,
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
    width: wp('50'),
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
    alignItems: 'center',
  },
  ingredBtn: {
    width: wp('44'),
    borderRadius: 15,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1.5'),
  },
  ingredBtnRed: {
    backgroundColor: 'rgba(255, 77, 74, 0.2)',
  },
  ingredBtnGreen: {
    backgroundColor: 'rgba(149, 187, 91, 0.2)',
  },
  ingredIcon: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
  },
  ingredientText: {
    fontSize: hp('2'),
    marginLeft: wp('2'),
    fontWeight: '600',
  },
  textGreen: {
    color: '#95BB5B',
  },
  textRed: {
    color: '#FF4D4A',
  },
  ingredArrow: {
    width: wp('5'),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    height: hp('2'),
    marginTop: hp('1'),
  },
  topRatedMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  popularTop: {},
  popularMain: {
    resizeMode: 'contain',
    marginHorizontal: wp('2'),
    paddingHorizontal: wp('3'),
    paddingVertical: hp('2'),
    borderRadius: 20,
    overflow: 'hidden',
  },
  popularTitle: {
    fontSize: hp('2.5'),
    color: Colors.black,
    fontWeight: '600',
    width: wp('50'),
  },
  popularBtn: {},
});
