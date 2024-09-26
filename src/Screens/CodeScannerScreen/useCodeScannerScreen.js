import {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {
  startBarcodeScanner,
  BarcodeScannerConfiguration,
  SingleScanningMode,
} from 'react-native-scanbot-barcode-scanner-sdk/ui_v2';
import {AfterCameraPer, getDataByBarCode} from '../../Utils/globalFunctions';
import API from '../../Utils/helperFunc';
import {checkAllergicIngUrl} from '../../Utils/Urls';
import {errorMessage} from '../../Config/NotificationMessage';
import {useMutation} from '@tanstack/react-query';
import {loadingFalse} from '../../Redux/Action/isloadingAction';
import useReduxStore from '../../Hooks/UseReduxStore';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

// import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

const useCodeScannerScreen = ({navigate, addListener}) => {
  const {dispatch} = useReduxStore();

  const {mutate} = useMutation({
    mutationFn: newTodo => {
      return API.post(checkAllergicIngUrl, newTodo);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        navigate('IngredientsInfoScreen', data);
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const afterScanCode = async code => {
    setCamera(false);
    const {ok, data} = await getDataByBarCode(code);
    if (ok) mutate({ingredients: data[0]?.ingredients ?? ''});
  };

  const [camera, setCamera] = useState(false);

  // const onSingleBarcodeScan = useCallback(async () => {
  //   try {
  //     /** Check license status and return early if the license is not valid */
  //     if (!(await ScanbotBarcodeSDK.getLicenseInfo()).data?.isLicenseValid) {
  //       return;
  //     }
  //     /**
  //      * Instantiate a configuration object of BarcodeScannerConfiguration and
  //      * start the barcode scanner with the configuration
  //      */
  //     const config = new BarcodeScannerConfiguration();
  //     /** Initialize the use case for single scanning */
  //     config.useCase = new SingleScanningMode();
  //     /** Start the BarcodeScanner */
  //     const result = await startBarcodeScanner(config);
  //     /** Handle the result if result status is OK */
  //     if (result.status == 'OK' && result.data) {
  //       const {ok, data} = await getDataByBarCode(result.data.items[0].text);
  //       if (ok) mutate({ingredients: data[0]?.ingredients ?? ''});
  //     } else {
  //       console.log('The user has canceled the Barcode Scanning');
  //     }
  //   } catch (e) {
  //     dispatch(loadingFalse());
  //     console.log(
  //       'An error has occurred while running Barcode Scanner',
  //       e.message,
  //     );
  //   }
  // }, []);

  const onSingleBarcodeScan = async () => {
    const {ok} = await AfterCameraPer();
    if (ok) setCamera(true);
    else setCamera(false);
  };

  const useEffectFun = () => {
    const event = addListener('focus', () => {
      setCamera(false);
    });
    return event;
  };

  useEffect(useEffectFun, []);

  return {
    hasPermission: true,
    device: true,
    onSingleBarcodeScan,
    afterScanCode,
    camera,
  };
};
export default useCodeScannerScreen;
