import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalsMain: {
    width: wp('100'),
    paddingHorizontal: wp('4'),
  },
  goalComp: {
    paddingTop: hp('7'),
  },
});
