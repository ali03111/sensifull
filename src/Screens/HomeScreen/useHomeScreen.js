import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {FilterMealUrl, HomeFilterDataUrl, homeData} from '../../Utils/Urls';
import {errorMessage} from '../../Config/NotificationMessage';
import {getIdsFromArry} from '../../Utils/globalFunctions';

const useHomeScreen = ({navigate}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [refresh, setRefresh] = useState(false);

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

  const onFilter = (cat, int) => {
    toggleModal();
    mutate({
      category_id: getIdsFromArry(cat, 'id'),
      ingredient_id: getIdsFromArry(int, 'id'),
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
    setRefresh(false);
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
  };
};

export default useHomeScreen;
