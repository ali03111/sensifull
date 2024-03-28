import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
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
  swipelist: {
    paddingVertical: hp('2'),
  },
  swipeMain: {
    flexDirection: 'row',
    backgroundColor: '#fcf8e9',
    marginVertical: hp('1.5'),
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    width: wp('93'),
  },

  swipeImg: {
    width: wp('20'),
    height: hp('10'),
  },
  swipeInner: {
    paddingVertical: hp('1'),
    paddingHorizontal: wp('2'),
  },
  swipeTitle: {
    fontWeight: 500,
  },
  swipeText: {
    fontSize: hp('1.7'),
    paddingTop: hp('.5'),
  },
  rowFront: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('10'),
    borderRadius: 15,
    // marginHorizontal: wp('3.5'),
    marginBottom: hp('2'),
  },
  rowBack: {
    // width: wp('100'),
    // marginBottom: 10,
    // flex: 1,
    borderRadius: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: wp('3.5'),
  },
  backRightBtn: {
    // textAlign: 'left',
    // alignItems: 'center',
  },
  backRightBtnLeft: {
    backgroundColor: '#1877F2',
    flex: 1,
    height: Platform.OS == 'ios' ? hp('10') : hp('10'),
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingTop: hp('2'),
    paddingLeft: wp('6'),
  },
  backRightBtnRight: {
    backgroundColor: '#EA4335',
    flex: 1,
    height: Platform.OS == 'ios' ? hp('10') : hp('10'),
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'flex-end',
    paddingTop: hp('2'),
    paddingRight: wp('6'),
  },
  trashIcon: {
    width: wp('6'),
    resizeMode: 'contain',
  },
  listMain: {
    // paddingHorizontal: wp('3.5'),
  },
});
