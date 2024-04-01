import {useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import useReduxStore from '../../Hooks/UseReduxStore';
import Schemas from '../../Utils/Validation';
import {launchImageLibrary} from 'react-native-image-picker';
import {useMutation} from '@tanstack/react-query';
import {loadingFalse} from '../../Redux/Action/isloadingAction';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {formDataFunc} from '../../Utils/helperFunc';
import {editProfileUrl} from '../../Utils/Urls';
import {types} from '../../Redux/types';

const useEditProfileScreen = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.editProfile,
  );
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');

  const [profileData, setProfileData] = useState(null);

  const {mutate} = useMutation({
    mutationFn: data => {
      return formDataFunc(
        editProfileUrl,
        {...data, profileData},
        'profile_image',
      );
    },
    onSuccess: ({ok, data}) => {
      dispatch(loadingFalse());
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', data);
      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: data.user,
        });
        successMessage('Your profile updated sucessfully!');
        goBack();
      } else {
        errorMessage(data?.message);
      }
    },
    onError: ({message}) => {
      dispatch(loadingFalse());
      errorMessage('Problem occurred while uploading data.');
    },
  });

  //GET IMAGE From Mobile
  const uploadFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          console.log('imag222e', res.assets);
          setProfileData(res?.assets[0]);
          //   mutate({image: res?.assets[0]});
        }
      },
    );
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    userData,
    profileData,
    uploadFromGalary,
    editFunc: mutate,
  };
};

export default useEditProfileScreen;
