import {useMutation, useQuery} from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';
import API from '../../Utils/helperFunc';
import {addFvMealUrl, getAlterIntUrl, getMealDetailUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {
  createKeyInArryObj,
  getObjectById,
  matchTwoArrays,
  updateKeyById,
} from '../../Utils/globalFunctions';
import useReduxStore from '../../Hooks/UseReduxStore';

const useTopRatedInnerScreen = ({navigate, addListener, goBack}, {params}) => {
  const {getState, dispatch} = useReduxStore();
  const {isloading} = getState('isloading');

  const [allData, setAllData] = useState();

  const {data, error, isSuccess, status, isLoading, isPending} = useQuery({
    queryKey: ['mealDetail'],
    gcTime: 'Infinity',
    queryFn: async () => {
      const {ok, data} = await API.get(
        getMealDetailUrl +
          params?.mealData?.id +
          '/' +
          params?.mealData?.planId,
      );
      if (ok) {
        setAllData(data?.data);
        const ingredients = data?.data?.ingredients ?? [];
        const allergies = data?.data?.user_allergies ?? [];
        const ingredientObj = createKeyInArryObj(
          matchTwoArrays(ingredients, allergies),
          'alternates',
          null,
        );
        setIngredientState(ingredientObj);
        ingredientRef.current = ingredientObj;
      } else {
        errorMessage('Please check your internet connection');
        goBack();
      }
      return data;
    },
  });

  const [mealPlan, setMealPlan] = useState({
    mealObj: null,
    serving: null,
  });

  const {mealObj, serving} = mealPlan;

  const updateState = data => setMealPlan(prev => ({...prev, ...data}));

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  const [modal1Visible, setModal1Visible] = useState(false);

  const [fav, setFav] = useState(data?.data?.is_favorite);

  const [dummy, setDummy] = useState(0);

  const ingredientRef = useRef(null);

  const [ingredientState, setIngredientState] = useState(ingredientRef.current);

  const [ingAlt, setIngAlt] = useState([]);

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(addFvMealUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        setFav(data?.is_favorite);
        successMessage(data?.message);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });
  const {mutateAsync} = useMutation({
    mutationFn: id => {
      return API.post(getAlterIntUrl, {ingredient_id: id});
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        setIngAlt(data);
        toggleModal();
      } else errorMessage(data?.message);
    },
  });

  const onSelectVal = (id, alternate) => {
    const alternateObj = getObjectById(id, ingredientRef.current)?.alternates;
    const foundAllergy = Boolean(alternateObj == alternate);
    // const foundAllergy = alternateArry?.find(res => res?.id === alternate?.id);

    if (foundAllergy) {
      setIngredientState(prev => updateKeyById(prev, id, null));
      ingredientRef.current = updateKeyById(ingredientRef.current, id, null);
    } else {
      setIngredientState(prev => updateKeyById(prev, id, alternate));
      ingredientRef.current = updateKeyById(
        ingredientRef.current,
        id,
        alternate,
      );
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return {
    toggleModal,
    modalVisible,
    allData,
    paramsData: params?.mealData,
    isFav: fav,
    ingAlt,
    getAlterInt: id => mutateAsync(id),
    modal1Visible,
    setModal1Visible,
    onSelectValue,
    mealObj,
    serving,
    ingredient: ingredientState,
    onSelectVal,
    paramsFun: params?.onServingSelect,
    setDummy,
  };
};

export default useTopRatedInnerScreen;
