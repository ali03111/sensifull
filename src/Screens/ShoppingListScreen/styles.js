import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  popularTop: {
    paddingVertical: hp('2.5'),
    paddingHorizontal: wp('4'),
    height: hp('82'),
  },
  searchedTitle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Main: {
    flexDirection: 'row',
  },
  Check: {
    width: wp('5.2'),
    height: hp('2.7'),
    resizeMode: 'contain',
    marginRight: wp('2'),
    paddingVertical: hp('2.6'),
  },
  socialInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingVertical: hp('1.4'),
  },
  socialText: {
    fontSize: hp('1.8'),
  },
  date: {
    fontWeight: '600',
  },
  catTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp('2.5'),
    paddingBottom: hp('1'),
  },
  btnMain: {
    width: wp('94'),
    position: 'absolute',
    bottom: 0,
    marginHorizontal: wp('3'),
    marginVertical: hp('2'),
  },
});
