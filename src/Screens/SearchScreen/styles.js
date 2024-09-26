import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  popularTop: {
    paddingVertical: hp('2'),
  },
  mealItem: {
    width: wp('44.5'),
    // alignItems: 'center',
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    borderWidth: 0.6,
    borderColor: '#202020',
    borderRadius: 20,
    overflow: 'hidden',
  },
  mealImage: {
    width: wp('28'),
    height: hp('14'),
    zIndex: 9,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    // overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderTopRightRadius: 20,
  },
  mealTitle: {
    fontSize: hp('2.2'),
    color: Colors.black,
    fontWeight: '600',
    paddingHorizontal: wp('3'),
    paddingBottom: hp('1.5'),
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  upComingFlatlistView: {
    paddingBottom: hp('13'),
    marginTop: hp('2'),
  },
});
