import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {homeData} from '../../Utils/Urls';

const useHomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  const {data, error} = useQuery({
    queryKey: ['HomeData'],
    queryFn: () => API.get(homeData),
  });

  //   console.log('first', data?.data);
  const [refresh, setRefresh] = useState(false);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

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
    refresh,
    onRefresh,
  };
};

export default useHomeScreen;
