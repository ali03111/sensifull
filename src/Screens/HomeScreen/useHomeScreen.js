import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {
  FilterMealUrl,
  HomeFilterDataUrl,
  SendMailUrl,
  homeData,
} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {getIdsFromArry} from '../../Utils/globalFunctions';
import useReduxStore from '../../Hooks/UseReduxStore';
import {Alert} from 'react-native';

const useHomeScreen = ({navigate, addListener}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const {getState} = useReduxStore();

  const {userData} = getState('Auth');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  const filterData = useQuery({
    queryKey: ['filterData'],
    queryFn: () => API.get(HomeFilterDataUrl),
  });

  const {mutate} = useMutation({
    mutationFn: newTodo => {
      return API.post(FilterMealUrl, newTodo);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        console.log('kjsdbvklsdbvlksdbvklsdbvlkbsdlkvsd', data);
        dynamicNav('RecommendedMealScreen', {
          title: 'Filter Data',
          list: data,
        });
      }
    },
    onError: ({message}) => errorMessage(message),
  });
  const {mutateAsync} = useMutation({
    mutationFn: newTodo => {
      return API.post(SendMailUrl, {});
    },
    onSuccess: ({ok, data}) => {
      console.log(':sldbvsdjkbvjksdbvobsdlkvbsd', data);
      if (ok) {
        Alert.alert('Please check your mail for subscription plans.');
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const onFilter = (cat, int) => {
    toggleModal();
    mutate({
      category_id: getIdsFromArry(cat, 'id'),
      allergy_ingredients: getIdsFromArry(int, 'id'),
    });
  };

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const dynamicNav = (route, item) => navigate(route, item);

  const {data, error} = useQuery({
    queryKey: ['HomeData'],
    queryFn: () => API.get(homeData),
  });

  const onRefresh = useCallback(() => {
    setRefresh(true);
    queryClient.fetchQuery({
      queryKey: ['HomeData'],
      staleTime: 1000,
    });
    queryClient.fetchQuery({
      queryKey: ['filterData'],
      staleTime: 1000,
    });
    setRefresh(false);
  }, []);

  useEffect(() => {
    const event = addListener('focus', () => {
      onRefresh();
    });
    return event;
  }, []);

  return {
    toggleModal,
    modalVisible,
    setModalVisible,
    allData: data?.data,
    dynamicNav,
    onRefresh,
    refresh,
    filterData: filterData?.data?.data,
    onFilter,
    userData,
    hitMail: mutateAsync,
  };
};

export default useHomeScreen;
