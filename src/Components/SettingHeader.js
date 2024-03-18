import {Image, StyleSheet, View} from 'react-native';
import {Touchable} from './Touchable';
import {arrowBack} from '../Assets';
import {TextComponent} from './TextComponent';
import {goBack} from '../Utils';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const SettingHeader = ({onpress, goBack, save, extraStyle}) => {
  return (
    <View style={{...styles.headerMain, ...extraStyle}}>
      <Touchable onPress={goBack}>
        <Image source={arrowBack} style={styles.arrBack} />
      </Touchable>
      {save && (
        <TextComponent
          text={'Save'}
          onPress={onpress}
          styles={styles.saveText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2'),
    marginBottom: hp('5'),
  },
  arrBack: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  saveText: {
    color: Colors.primaryColor,
  },
});
