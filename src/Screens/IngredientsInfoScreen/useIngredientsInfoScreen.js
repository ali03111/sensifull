import {useCallback, useEffect} from 'react';
import {Alert} from 'react-native';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {
  startBarcodeScanner,
  BarcodeScannerConfiguration,
  SingleScanningMode,
} from 'react-native-scanbot-barcode-scanner-sdk/ui_v2';
import {getDataByBarCode} from '../../Utils/globalFunctions';
import API from '../../Utils/helperFunc';
import {checkAllergicIngUrl} from '../../Utils/Urls';
import {errorMessage} from '../../Config/NotificationMessage';
import {useMutation} from '@tanstack/react-query';
import {loadingFalse} from '../../Redux/Action/isloadingAction';
import useReduxStore from '../../Hooks/UseReduxStore';
// import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';

const useIngredientsInfoScreen = ({navigate}, {params}) => {
  const {dispatch} = useReduxStore();

  return {hasPermission: true, device: true};
};
export default useIngredientsInfoScreen;
