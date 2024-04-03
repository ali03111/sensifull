import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
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

  return {toggleModal, modalVisible, setModalVisible, allData: data?.data};
};

export default useHomeScreen;
