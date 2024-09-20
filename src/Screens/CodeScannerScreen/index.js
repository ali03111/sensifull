import {
  Button,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {Camera, useCodeScanner} from 'react-native-vision-camera';
import useCodeScannerScreen from './useCodeScannerScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../Theme/Variables';
import ThemeButton from '../../Components/ThemeButton';
import {hp, wp} from '../../Config/responsive';
import {stepBg} from '../../Assets';
import {styles} from './styles';

const CodeScannerScreen = ({navigation}) => {
  const {hasPermission, device, onSingleBarcodeScan} =
    useCodeScannerScreen(navigation);

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <HeaderWithFilterAndBack Text={'Scan Barcode'} />
      <View style={styles.innerView}>
        <TextComponent text={'Barcode Scanner'} styles={styles.heading} />
        <TextComponent
          text={'Tap the button below, to scan barcode'}
          styles={{fontSize: hp('2')}}
        />
      </View>
      <ThemeButton
        title={'Tap to scan'}
        onPress={onSingleBarcodeScan}
        style={styles.btn}
      />
    </ImageBackground>
  );
};

export default memo(CodeScannerScreen);
