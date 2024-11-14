import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {allRatedUrl} from '../../Utils/Urls';

const useTopRatedMealScreen = () => {
  const {data} = useQuery({
    queryKey: ['allPopulars'],
    queryFn: () => API.get(allRatedUrl),
  });

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['allPopulars'],
      staleTime: 1000,
    });
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {
    toggleModal,
    onRefresh,
    allData: data?.data,
  };
};

export default useTopRatedMealScreen;
