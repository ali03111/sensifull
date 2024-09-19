import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {Camera, useCodeScanner} from 'react-native-vision-camera';
import useCodeScannerScreen from './useCodeScannerScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../Theme/Variables';
import ThemeButton from '../../Components/ThemeButton';
import {hp, wp} from '../../Config/responsive';

const CodeScannerScreen = ({navigation}) => {
  const {hasPermission, device, onSingleBarcodeScan} =
    useCodeScannerScreen(navigation);

  return (
    <View style={{flex: 1}}>
      <HeaderWithFilterAndBack Text={'Scan Barcode'} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: Platform.OS == 'ios' ? hp('70') : hp('75'),
        }}>
        <TextComponent
          text={'Barcode Scanner'}
          styles={{
            color: Colors.primaryColor,
            fontSize: hp('4'),
            fontWeight: 'bold',
          }}
        />
        <TextComponent
          text={'Tap the button below, to scan barcode'}
          styles={{fontSize: hp('2')}}
        />
      </View>
      <ThemeButton
        title={'Tap to scan'}
        onPress={onSingleBarcodeScan}
        style={{width: wp('90'), alignSelf: 'center'}}
      />
    </View>
  );
};

export default memo(CodeScannerScreen);
