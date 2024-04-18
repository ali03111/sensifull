import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import API from '../../Utils/helperFunc';
import {getMealsDataUrl} from '../../Utils/Urls';
import {errorMessage} from '../../Config/NotificationMessage';

const useRecommendedMealScreen = ({naviagte, goBack}, {params}) => {
  const {catData, getDataFromScreen} = params;

  const [mealPlan, setMealPlan] = useState({
    mealObj: null,
    serving: null,
  });

  const {mealObj, serving} = mealPlan;

  const updateState = data => setMealPlan(prev => ({...prev, ...data}));

  const [modal1Visible, setModal1Visible] = useState(false);

  const onSaveData = ({meal, serving}) => {
    if (serving != null) {
      setModal1Visible(false);
      let finalObj = {
        category: {
          ...catData,
          meals: meal,
          serving,
        },
      };
      goBack();
      console.log(
        'finalObjfinalObjfinalObjfinalObjfinalObjfinalObjfinalObjfinalObj',
        JSON.stringify(finalObj),
      );
      getDataFromScreen(finalObj);
    } else errorMessage('Please select serving first');
  };

  const {data, error} = useQuery({
    queryKey: ['mealData'],
    queryFn: () => API.get(getMealsDataUrl + catData?.id),
  });

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  return {
    mealsData: data?.data,
    onSelectValue,
    mealPlan,
    onSaveData,
    modal1Visible,
    setModal1Visible,
  };
};

export default useRecommendedMealScreen;
