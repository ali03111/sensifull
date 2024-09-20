import {StyleSheet} from 'react-native';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {flexGrow: 1, marginTop: hp('2'), paddingBottom: hp('5')},
  whiteView: {
    width: wp('90'),
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp('3'),
    borderRadius: 20,
    marginVertical: hp('2'),
    paddingVertical: hp('2'),
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 3,
    shadowRadius: 7.68,
    elevation: 20,
  },
  ingredMainRed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.2'),
    color: Colors.themeRed,
  },
  ingredMainGreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('.5'),
    paddingVertical: hp('.2'),
    // paddingHorizontal: wp('4'),
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
  ingredTextStyle: isAlergic => ({
    fontSize: hp('1.8'),
    color: isAlergic ? Colors.themeRed : Colors.textGrayColor,
    marginLeft: wp('2'),
    width: wp('80'),
  }),
  allergiesIconGreen: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('1.2'),
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: hp('2.5'),
    marginBottom: hp('2'),
  },
  btnStyle: {
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: hp('2'),
    marginTop: hp('3'),
  },
  noDataImage: {
    width: wp('35'),
    height: hp('17.5'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  noDataSubTitle: {
    fontSize: hp('2'),
    textAlign: 'center',
    color: Colors.textGrayColor,
    marginBottom: hp('4'),
  },
});
