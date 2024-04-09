import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {getPopularUrl} from '../../Utils/Urls';

const useTodayPopularScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {data} = useQuery({
    queryKey: ['allPopulars'],
    queryFn: () => API.get(getPopularUrl),
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
    modalVisible,
    setModalVisible,
    onRefresh,
    allData: data?.data,
  };
};

export default useTodayPopularScreen;
