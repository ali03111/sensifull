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
});
