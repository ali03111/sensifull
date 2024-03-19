import {StyleSheet} from 'react-native';
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
    paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
  },
  mealImage: {
    resizeMode: 'contain',
    borderRadius: 20,
    height: hp('24'),
    overflow: 'hidden',
    marginBottom: hp('2'),
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
    borderRadius: 20,
    paddingVertical: hp('.3'),
    paddingBottom: hp('.6'),
    alignSelf: 'flex-end',
    paddingHorizontal: wp('3'),
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    fontSize: hp('1.8'),
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
});
