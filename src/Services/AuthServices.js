import auth from '@react-native-firebase/auth';
import {fcmToken, loginUrl, logoutUrl, registerUrl} from '../Utils/Urls';
import API from '../Utils/helperFunc';

const getFbResult = () => auth().currentUser.getIdTokenResult();

const loginService = param => API.post(loginUrl, param);

const registerService = param => API.post(registerUrl, param);

const logoutService = async () => await API.get(logoutUrl);

const fcmRegService = async params =>
  await API.post(fcmToken, {fcm_token: params});

const logOutFirebase = () => auth().signOut();

export {
  getFbResult,
  loginService,
  logOutFirebase,
  registerService,
  logoutService,
  fcmRegService,
};
