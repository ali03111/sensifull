import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {getDatePlanUrl, getMealPlanUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useMealPlanScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [bottomData, setBottomData] = useState([]);

  const handleButtonClick = index => {
    setActiveButton(index);
    mutate({date: index});
  };

  const {data, error, isLoading} = useQuery({
    queryKey: ['getDatePlan'],
    queryFn: async () => {
      const allProps = await API.get(getDatePlanUrl);
      if (allProps?.ok) {
        console.log('skldjbvkljsdbvbsdvbsdjbvskdjbvds', allProps?.data);
        setActiveButton(allProps?.data[0]);
        mutate({date: allProps?.data[0]});
      }
      return allProps;
    },
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      console.log('sdlkbvlksbvlbsdlkvds', activeButton);
      return API.post(getMealPlanUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log(
        'dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk',
        JSON.stringify(data),
      );
      if (ok) {
        setBottomData(data);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  // if (!isLoading) mutate();
  const [activeButton, setActiveButton] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log('firstasd');
  };

  return {
    toggleModal,
    modalVisible,
    setModalVisible,
    planDate: data?.data,
    handleButtonClick,
    activeButton,
    bottomData,
  };
};

export default useMealPlanScreen;
