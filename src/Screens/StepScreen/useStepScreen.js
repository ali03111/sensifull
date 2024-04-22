import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import API from '../../Utils/helperFunc';
import {getOnBoardDataUrl, saveOnboardingUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {types} from '../../Redux/types';
import useReduxStore from '../../Hooks/UseReduxStore';
import {Alert} from 'react-native';
import {getIdsFromArry} from '../../Utils/globalFunctions';

const useStepScreen = ({navigate, goBack}) => {
  const {dispatch, getState} = useReduxStore();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [onBoardData, setOnboardData] = useState({
    purpose: null,
    allergies: [],
    restrictions: [],
    ageRange: null,
    gender: null,
    hearFrom: [],
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log('bodybodybodybodybodybodybodybodybodybodybody', body);
      return API.post(saveOnboardingUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('osidbviobsdoivbsdoivbsdobvosd', data);

      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: data.user,
        });
      } else errorMessage(data?.message);
    },
  });

  const nextStep = {
    1: () => {
      if (purpose == null) Alert.alert('Warning', 'Please select purpose');
      else handleNextStep();
    },
    2: () => {
      if (restrictions.length == 0)
        Alert.alert('Warning', 'Please select at least one ingredient');
      else handleNextStep();
    },
    3: () => {
      if (allergies.length == 0)
        Alert.alert('Warning', 'Please select at least one allergy');
      else handleNextStep();
    },
    4: () => {
      if (ageRange == null) Alert.alert('Warning', 'Please select age');
      else handleNextStep();
    },
    5: () => {
      if (gender == null) Alert.alert('Warning', 'Please select gender');
      else handleNextStep();
    },
    6: () =>
      mutate({
        ...onBoardData,
        hearFrom: JSON.stringify(onBoardData?.hearFrom),
        allergies: getIdsFromArry(onBoardData?.allergies, 'id'),
        restrictions: getIdsFromArry(onBoardData?.restrictions, 'id'),
      }),
  };

  const {ageRange, allergies, gender, hearFrom, purpose, restrictions} =
    onBoardData;

  const updateState = data => setOnboardData(prev => ({...prev, ...data}));

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  const handleNextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const dynamicRoute = (screen, params) => navigate(screen, params);

  const {data, error} = useQuery({
    queryKey: ['onBoardData'],
    queryFn: () => API.get(getOnBoardDataUrl),
  });
  console.log('datadatadatadatadatadatadatadatadata', data?.data);

  return {
    onbardData: data?.data,
    handleNextStep: nextStep,
    handlePreviousStep,
    onSelectValue,
    onBoardData,
    step,
    dynamicRoute,
    mutate,
  };
};

export default useStepScreen;
