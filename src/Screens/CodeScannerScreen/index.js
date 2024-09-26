import {
  Button,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const CodeScannerScreen = ({navigation}) => {
  const {hasPermission, device, camera, onSingleBarcodeScan, afterScanCode} =
    useCodeScannerScreen(navigation);

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <HeaderWithFilterAndBack Text={'Scan Barcode'} />
      {camera ? (
        <QRCodeScanner
          onRead={e => afterScanCode(e.data)}
          reactivate={true}
          reactivateTimeout={2000}
          showMarker={true}
          checkAndroid6Permissions={true}
          permissionDialogTitle={'Perission'}
          permissionDialogMessage={'Please allow camera permission to get scan'}
          cameraProps={RNCamera.Constants.BarCodeType.qr}
          customMarker={
            <View style={styles.cameraView}>
              <View style={styles.barView} />
            </View>
          }
          bottomContent={
            <>
              <View style={styles.innerView}>
                <TextComponent
                  text={'Barcode Scanner'}
                  styles={styles.heading}
                />
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
            </>
          }
        />
      ) : (
        <>
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
        </>
      )}
    </ImageBackground>
  );
};

export default memo(CodeScannerScreen);
