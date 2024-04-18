import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {homeData} from '../../Utils/Urls';

const useHomeScreen = ({navigate}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
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
  };
};

export default useHomeScreen;
