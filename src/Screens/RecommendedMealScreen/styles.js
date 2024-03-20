import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  mealItem: {
    width: wp('44.5'),
    // alignItems: 'center',
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    borderWidth: 0.5,
    borderColor: '#202020',
    borderRadius: 20,
    overflow: 'hidden',
  },
  mealImage: {
    width: wp('30'),
    height: hp('15'),
    zIndex: 9,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
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
});
