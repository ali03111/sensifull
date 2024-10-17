import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutAuth, logOutUser} from '../../Redux/Action/AuthAction';
import {useMutation} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {deleteAccUrl, SendMailUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {logoutService} from '../../Services/AuthServices';
import {Alert} from 'react-native';

const useSettingScreen = ({navigate}) => {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');
  const {isloading} = getState('isloading');

  const [alertState, setAlertState] = useState({
    logoutAlert: false,
    deleteAlert: false,
  });

  console.log(
    'profile_imageprofile_imageprofile_imageprofile_image',
    userData?.profile_image,
  );

  const {mutate} = useMutation({
    mutationFn: () => API.delete(deleteAccUrl),
    onSuccess: async ({ok, data}) => {
      if (ok) {
        successMessage(data?.message);
        await logoutService();
        dispatch(logOutUser());
      } else errorMessage(data?.message);
    },
    onError: e => errorMessage(e),
  });

  const {mutateAsync} = useMutation({
    mutationFn: newTodo => {
      return API.post(SendMailUrl, {});
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        Alert.alert('Please check your mail for subscription plans.');
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const {deleteAlert, logoutAlert} = alertState;

  const updateState = data => setAlertState(prev => ({...prev, ...data}));

  const toggleAlert = state => updateState({[state]: !alertState[state]});

  const dynamicRoute = route => navigate(route);

  const onConfirm = val => {
    if (val == 'logoutAlert') logoutFunc();
    else mutate();
  };

  const logoutFunc = () => {
    toggleAlert(
      (logoutAlert && 'logoutAlert') || (deleteAlert && 'deleteAlert'),
    );
    setTimeout(() => {
      dispatch(logOutAuth());
    }, 900);
  };

  return {
    toggleAlert,
    logoutAlert,
    deleteAlert,
    onConfirm,
    dynamicRoute,
    isloading,
    userData,
    hitMail: mutateAsync,
  };
};
export default useSettingScreen;
