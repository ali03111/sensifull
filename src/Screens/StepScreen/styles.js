import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100'),
    paddingHorizontal: wp('4'),
  },
  button: {
    paddingVertical: hp('.6'),
    paddingHorizontal: wp('4'),
    borderRadius: 30,
    fontSize: hp('1'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp('1.8'),
    color: 'white',
  },
  arrRight: {
    width: wp('4'),
    height: hp('2'),
    resizeMode: 'contain',
    marginLeft: wp('1.5'),
  },
  previousButton: {
    backgroundColor: Colors.primaryColor,
  },
  nextButton: {
    backgroundColor: Colors.primaryColor,
  },
  stepIndicator: {
    fontSize: 20,
    marginBottom: 20,
  },
  stepCirclesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp('5'),
  },
  circleContainer: {
    alignItems: 'center',
    marginHorizontal: wp('2.5'),
  },
  circle: {
    width: wp('10'),
    height: hp('5'),
    borderRadius: 20,
    backgroundColor: '#EBD5F2',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  activeCircle: {
    backgroundColor: Colors.primaryColor,
  },
  circleText: {
    fontSize: hp('3'),
    fontWeight: '800',
    color: 'white',
  },
  activeLine: {
    backgroundColor: Colors.primaryColor,
  },
  nonActiveLine: {
    flex: 1,
    height: hp('.6'),
    backgroundColor: '#EBD5F2',
    position: 'absolute',
    left: 30,
    right: 20,
    top: 18,
    width: wp('10'),
    zIndex: 0,
  },
});
