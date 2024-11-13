import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {
  createPlanUrl,
  getCategoryUrl,
  getDatePlanUrl,
  updatePlanUrl,
} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import useReduxStore from '../../Hooks/UseReduxStore';
import {types} from '../../Redux/types';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {transformArray} from '../../Utils/globalFunctions';

const useCreateMealPlanScreen = ({navigate, goBack}) => {
  const {dispatch, getState} = useReduxStore();

  // Get QueryClient from the context

  const {mealPlans} = getState('MealPlanData');

  console.log('mealPlansmealPlansmealPlansmealPlansmealPlans', mealPlans);

  const queryClient = useQueryClient();

  const [modalVisible, setModalVisible] = useState(false);

  const [collapsed, setCollapsed] = useState(true);

  const [selectedDate, setSelectedDate] = useState(null);

  const [planId, setPlanId] = useState({
    planId: null,
    mealId: null,
    prevDate: null,
  });

  const [bookDates, setBookDates] = useState([]);

  useQuery({
    queryKey: ['getDate'],
    queryFn: async () => {
      const {data, ok} = await API.get(getDatePlanUrl);
      // if (ok) {
      //   setBookDates(data);
      // }
    },
  });
  // const queryKeys = queryCache.getAll().map(cache => cache.queryKey); // QueryKey[]
  // console.log('sdbvklbsdlkvblksdbvklsdbvlkbsd', queryKeys);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
    dynamicRoute('SelectYourMealScreen', {
      catData: data?.data.filter(res => res?.id == buttonIndex?.id)[0],
      getDataFromScreen,
    });
  };

  const {data, error} = useQuery({
    queryKey: ['mealCategory'],
    queryFn: () => API.get(getCategoryUrl),
  });

  useEffect(() => {
    setSelectedDate(mealPlans[0]?.activeButton);
    setPlanId({
      planId: mealPlans[0]?.pivot?.plan_id,
      mealId: mealPlans[0]?.pivot?.meal_id,
      prevDate: mealPlans[0]?.activeButton,
    });
    return () =>
      dispatch({
        type: types.ClearPlan,
      });
  }, []);

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log(
        'bodybodybodybodybodybodybodybodybodybodybodybody',
        JSON.stringify(body),
      );
      return API.post(createPlanUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        setSelectedDate(null);
        setSelectedButton(null);
        dispatch({
          type: types.ClearPlan,
        });
        successMessage('Your plan has been created sucessfully!');
        goBack();
        queryClient.invalidateQueries({queryKey: ['getDatePlan']});
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else {
        console.log('sidonvklsdnvoknsdvnsdnvsdnkvsd', data?.message);
        errorMessage(data?.message);
      }
    },
  });

  const getDataFromScreen = planData => {
    dispatch({
      type: types.addPlan,
      payload: planData,
    });
    setSelectedButton(null);
    console.log(
      'lalkbsdlvblsdbvklsbdvbsdlkvblskdbvlksdbvklsdbvlksbvlsd',
      JSON.stringify(planData),
      JSON.stringify(mealPlans),
    );
  };

  const dynamicRoute = (route, params) => navigate(route, params);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  const updatedMealFun = useMutation({
    mutationFn: body => {
      return API.post(updatePlanUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('lsjkbklbsdklbskldblsdbklsdblksbdklbsd', data);
      if (ok) {
        dispatch({
          type: types.ClearPlan,
        });
        goBack();
        queryClient.invalidateQueries({queryKey: ['getDatePlan']});
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  return {
    toggleModal,
    modalVisible,
    setModalVisible,
    catData: data?.data,
    dynamicRoute,
    getDataFromScreen,
    reduxMealPlans: mealPlans,
    selectedButton,
    handleButtonPress,
    toggleCollapsed,
    collapsed,
    selectedDate,
    setSelectedDate,
    bookDates,
    createPlan: () => {
      if (selectedDate != null) {
        console.log(
          'mealPlansmealPlansmealPlansmealsdfsdPlansmealPlansmealPlans',
          planId?.prevDate,
        );
        // transformArray(mealPlans,selectedDate)
        if (planId?.prevDate != null) {
          updatedMealFun.mutateAsync({
            planId: planId?.planId,
            newMealId: mealPlans[0]?.category?.meals?.id,
            serving:
              mealPlans[0]?.category?.serving ?? mealPlans[0]?.pivot?.serving,
            ingredients: mealPlans[0]?.category?.meals?.ingredients ?? [],
            currentMealId: planId?.mealId,
            date: mealPlans[0]?.activeButton ?? selectedDate,
          });
        } else mutate(transformArray(mealPlans, selectedDate));
      } else errorMessage('Please select date first');
    },
  };
};

export default useCreateMealPlanScreen;
