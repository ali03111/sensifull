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
    width: wp('28'),
    height: hp('14'),
    zIndex: 9,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    overflow: 'hidden',
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
  popularTop: {
    marginVertical: hp('1.5'),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  modalContent: {
    width: wp('92'),
    backgroundColor: 'white',
    paddingVertical: hp('2'),
    paddingBottom: hp('5'),
    paddingHorizontal: wp('3'),
    borderRadius: 10,
    marginHorizontal: wp('5'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  modalHd: {
    fontSize: hp('3'),
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: hp('1'),
  },
  modalText: {
    fontSize: hp('1.8'),
    textAlign: 'center',
    marginHorizontal: wp('2'),
    lineHeight: 19,
  },
  closeBtn: {
    alignItems: 'flex-end',
  },
  closeIconStyle: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
    marginBottom: hp('-1'),
  },
  serveBtnMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('5'),
  },
  servingBtn: {
    width: wp('41'),
  },
  btnText: {
    color: Colors.black,
    fontWeight: 500,
  },
  btnTextWhite: {
    color: Colors.white,
    fontWeight: 500,
  },
  pickerText: pickerText => ({
    color: 'black',
    paddingHorizontal: wp('5'),
    paddingVertical: hp('.5'),
    position: 'absolute',
    width: wp('40'),
    fontSize: hp('1.8'),
    opacity: 0.9,
  }),
  agePicker: {
    borderWidth: 1,
    borderColor: '#525252',
    borderRadius: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: hp('5'),
  },
});
