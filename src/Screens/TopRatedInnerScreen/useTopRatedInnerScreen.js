import {useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import API from '../../Utils/helperFunc';
import {getMealDetailUrl} from '../../Utils/Urls';

const useTopRatedInnerScreen = ({navigate}, {params}) => {
  const {data, error} = useQuery({
    queryKey: ['mealDetail'],
    queryFn: () => API.get(getMealDetailUrl + params?.id),
  });

  console.log('lsdbvklsbdlkvbsldkbvlsdbvksd', data?.data);

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {toggleModal, modalVisible, allData: data?.data?.data};
};

export default useTopRatedInnerScreen;
