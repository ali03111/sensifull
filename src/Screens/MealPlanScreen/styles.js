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
});
