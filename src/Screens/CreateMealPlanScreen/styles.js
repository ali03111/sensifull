import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingBottom: hp('10'),
  },
  noDataImage: {
    width: wp('35'),
    height: hp('17.5'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: hp('4'),
  },
  noDataTitle: {
    fontSize: hp('3.5'),
    textAlign: 'center',
    fontWeight: 600,
    color: Colors.primaryColor,
  },
  noDataSubTitle: {
    fontSize: hp('2'),
    textAlign: 'center',
    color: Colors.textGrayColor,
    marginBottom: hp('6'),
  },
  mealInner: {
    marginTop: hp('-10'),
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('4'),
  },
  mainBtn: {
    backgroundColor: '#fcf8e9',
    marginHorizontal: wp('4'),
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2.5'),
    marginVertical: hp('1.5'),
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  mainBtnInner: {
    borderBottomWidth: 0.3,
    borderColor: Colors.textGrayColor,
    paddingBottom: hp('1.5'),
  },
  arrStyle: {
    resizeMode: 'contain',
    width: wp('4'),
  },
  toggleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: hp('1'),
    // paddingBottom: hp('1'),
  },
  btnText: {
    color: Colors.textGrayColor,
  },
  TouchableMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: hp('1'),
    paddingTop: hp('1.5'),
  },
  arrRight: {
    resizeMode: 'contain',
    width: wp('4'),
  },
  selectableBtnStyle: {
    flexDirection: 'row',
  },
  calenderMain: {
    backgroundColor: '#fcf8e9',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: wp('4'),
    marginTop: hp('3'),
    marginBottom: hp('1'),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnStyle: {
    alignSelf: 'center',
    width: wp('90'),
    marginTop: hp('2'),
  },
});
