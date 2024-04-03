import {useState} from 'react';
import {getMealDetailUrl} from '../../Utils/Urls';
import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';

const useTopRatedInnerScreen = params => {
  console.log('firstasdvv', getMealDetailUrl + params?.params?.id);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const {data, error} = useQuery({
    queryKey: ['mealDetail'],
    queryFn: () => API.get(getMealDetailUrl + params?.params?.id),
  });

  console.log('asdasdarta', data?.data);

  return {toggleModal, modalVisible, setModalVisible};
};

export default useTopRatedInnerScreen;
