import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {createPlanUrl, getCategoryUrl, getDatePlanUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import useReduxStore from '../../Hooks/UseReduxStore';
import {types} from '../../Redux/types';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {transformArray} from '../../Utils/globalFunctions';

const useCreateMealPlanScreen = ({navigate, goBack}) => {
  const {dispatch, getState} = useReduxStore();

  // Get QueryClient from the context

  const {mealPlans} = getState('MealPlanData');

  const queryClient = useQueryClient();

  const [modalVisible, setModalVisible] = useState(false);

  const [collapsed, setCollapsed] = useState(true);

  const [selectedDate, setSelectedDate] = useState(null);

  const [bookDates, setBookDates] = useState([]);

  useQuery({
    queryKey: ['getDate'],
    queryFn: async () => {
      const {data, ok} = await API.get(getDatePlanUrl);
      if (ok) {
        setBookDates(data);
      }
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
  };

  const {data, error} = useQuery({
    queryKey: ['mealCategory'],
    queryFn: () => API.get(getCategoryUrl),
  });

  const {mutate} = useMutation({
    mutationFn: body => {
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
        // transformArray(mealPlans,selectedDate)
        mutate(transformArray(mealPlans, selectedDate));
      } else errorMessage('Please select date first');
    },
  };
};

export default useCreateMealPlanScreen;
