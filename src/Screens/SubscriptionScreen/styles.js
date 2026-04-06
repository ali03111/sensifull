import {Platform, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors, FontSize} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderRadius: 10,
  },

  backButton: {
    marginTop: hp('5'),
    marginLeft: wp('5'),
  },

  backIcon: {
    width: wp('6'),
    height: hp('5'),
  },

  centerContainer: {
    alignItems: 'center',
    marginTop: hp('2'),
  },

  upgradeTitle: {
    color: Colors.primaryColor,
    fontSize: hp('3'),
    fontWeight: 'bold',
  },

  upgradeDesc: {
    textAlign: 'center',
    fontSize: hp('1.7'),
    width: wp('80'),
    marginTop: hp('2'),
  },

  priceCard: {
    marginTop: hp('5'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    padding: wp('4'),
    width: wp('85'),
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1'),
  },

  priceText: {
    fontWeight: 'bold',
  },

  priceYear: {
    fontWeight: 'bold',
    color: '#52525280',
    fontSize: hp('1.8'),
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bulletDot: {
    fontSize: hp('3'),
    color: '#95BB5B',
    lineHeight: hp('3'),
    includeFontPadding: false,
  },

  bulletText: {
    fontSize: hp('1.5'),
  },

  buyPremiumButton: {
    backgroundColor: Colors.primaryColor,
    marginTop: hp('3'),
    height: hp('4.5'),
  },

  buyPremiumText: {
    color: 'white',
    fontSize: hp('1.7'),
  },

  tickCircleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: wp('2'),
    paddingVertical: hp('1'),
  },

  tickCircle: {
    resizeMode: 'contain',
    height: hp('3.5'),
    width: wp('4.5'),
    marginLeft: wp('1.5'),
  },

  packText: {
    fontWeight: '300',
    fontSize: FontSize.scale13,
    marginLeft: wp('1.5'),
    width: wp('80'),
  },

  upperCont: {
    width: wp('92'),
    marginTop: hp('2'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    paddingBottom: hp('2'),
  },

  midCont: {
    backgroundColor: Colors.backgroundTheme,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: hp('10'),
  },

  innerCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2'),
    marginLeft: hp('1.5'),
  },

  icon: {
    resizeMode: 'contain',
    height: hp('6'),
    width: wp('12'),
  },

  planTextContainer: {
    marginLeft: wp('1.5'),
  },

  monthlyText: {
    fontWeight: '600',
    fontSize: FontSize.scale18,
    color: Colors.white,
    textAlign: 'left',
  },

  monthlyTextBold: {
    fontWeight: 'bols',
    fontSize: FontSize.scale18,
    color: Colors.white,
  },

  planFeaturesContainer: {
    marginTop: hp('1.5'),
    width: wp('90'),
  },

  buyCont: {
    width: wp('35'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2'),
    marginLeft: wp('-0.7'),
    height: hp('4'),
  },

  buyPlan: {
    fontSize: FontSize.scale12,
    fontWeight: '500',
  },

  buyButtonContainer: {
    paddingVertical: hp('1'),
    paddingHorizontal: wp('4'),
  },

  buyButton: {
    height: hp('4.5'),
    width: wp('25'),
  },

  boldText: {
    fontWeight: 'bold',
    color: Colors.backgroundTheme,
  },
});
