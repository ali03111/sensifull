import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import API from '../../Utils/helperFunc';
import {addFvMealUrl, getMealDetailUrl} from '../../Utils/Urls';
import {successMessage} from '../../Config/NotificationMessage';

const useTopRatedInnerScreen = ({navigate}, {params}) => {
  const {data, error} = useQuery({
    queryKey: ['mealDetail'],
    queryFn: () => API.get(getMealDetailUrl + params?.id),
  });

  const [fav, setFav] = useState(data?.data?.is_favorite);

  console.log('lsdbvklsbdlkvbsldkbvlsdbvksd', data?.data);

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(addFvMealUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        setFav(data?.is_favorite);
        successMessage(data?.message);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return {
    toggleModal,
    modalVisible,
    allData: data?.data?.data,
    paramsData: params,
    isFav: fav,
  };
};

export default useTopRatedInnerScreen;
