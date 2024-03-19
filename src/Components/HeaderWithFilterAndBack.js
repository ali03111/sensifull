import {Image, StyleSheet, View} from 'react-native';
import {Touchable} from './Touchable';
import {arrowBack} from '../Assets';
import {TextComponent} from './TextComponent';
import {goBack} from '../Utils';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const HeaderWithFilterAndBack = ({
  onpress,
  backIconStyle,
  textStyle,
  Text,
  filterIcon,
  goBack,
  mainStyle,
  favStyle,
}) => {
  return (
    <View style={{...styles.topRatedMain, ...mainStyle}}>
      <Touchable onPress={goBack}>
        <Image
          source={arrowBack}
          style={{...styles.arrBack, ...backIconStyle}}
        />
      </Touchable>
      <TextComponent text={Text} styles={{...styles.viewAll, ...textStyle}} />
      <Touchable onPress={onpress}>
        <Image source={filterIcon} style={{...styles.arrBack, ...favStyle}} />
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  topRatedMain: {
    paddingHorizontal: wp('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: hp('3'),
    paddingBottom: hp('1.5'),
  },
  arrBack: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  viewAll: {
    fontSize: hp('2.5'),
    color: Colors.white,
    fontWeight: 600,
  },
});
