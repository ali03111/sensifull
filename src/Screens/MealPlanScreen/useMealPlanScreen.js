import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {
  deleteMealUrl,
  getDatePlanUrl,
  getMealPlanUrl,
  updatePlanUrl,
} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useMealPlanScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [bottomData, setBottomData] = useState([]);

  const [updatedPlan, setUpdatedPlan] = useState({});

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const handleButtonClick = index => {
    setActiveButton(index);
    mutate({date: index});
  };

  const {data, error, isLoading} = useQuery({
    queryKey: ['getDatePlan'],
    queryFn: async () => {
      const allProps = await API.get(getDatePlanUrl);
      if (allProps?.ok) {
        console.log('skldjbvkljsdbvbsdvbsdjbvskdjbvds', allProps?.data);
        setActiveButton(activeButton ?? allProps?.data[0]);
        mutate({date: activeButton ?? allProps?.data[0]});
      }
      return allProps;
    },
  });
  const {mutateAsync} = useMutation({
    mutationFn: body => {
      return API.delete(deleteMealUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        if (data?.is_date) {
          setActiveButton(null);
          setTimeout(() => {
            onRefresh();
          }, 100);
        } else {
          queryClient.invalidateQueries({queryKey: ['getDatePlan']});
        }
        // setBottomData(data);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });
  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(getMealPlanUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        setBottomData(data);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  const updatedMealFun = useMutation({
    mutationFn: body => {
      return API.post(updatePlanUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['getDatePlan']});
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  const onRefresh = () => {
    queryClient.fetchQuery({
      queryKey: ['getDatePlan'],
      staleTime: 1000,
    });
  };
  const getDataFromScreen = (planData, plan_id, mealId) => {
    console.log(updatedPlan, 'ghgjhg');
    updatedMealFun.mutate({
      planId: plan_id,
      newMealId: planData?.category?.meals?.id,
      serving: planData?.category?.serving,
      ingredients: planData?.category?.meals?.ingredients,
      currentMealId: mealId,
    });
  };

  // if (!isLoading) mutate();
  const [activeButton, setActiveButton] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {
    toggleModal,
    modalVisible,
    setModalVisible,
    planDate: data?.data,
    handleButtonClick,
    activeButton,
    bottomData,
    onRefresh,
    onDeleteMeal: ({date, meal_id}) => mutateAsync({date, meal_id}),
    getDataFromScreen,
    setUpdatedPlan,
  };
};

export default useMealPlanScreen;
