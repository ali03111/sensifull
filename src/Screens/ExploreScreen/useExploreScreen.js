import {useCallback, useState} from 'react';
import {addFvMealUrl, ExplorMealsUrl, getFvMealUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useExploreScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const queryClient = useQueryClient();

  const favData = useQuery({
    queryKey: ['exploreMeals'],
    queryFn: () => API.get(ExplorMealsUrl),
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(addFvMealUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        successMessage(data?.message);
        queryClient.invalidateQueries({queryKey: ['favData']});
        queryClient.invalidateQueries({queryKey: ['exploreMeals']});
      } else errorMessage(data?.message);
    },
  });

  const toggleModal = item => {
    mutate({
      meal_id: item?.id,
    });
  };
  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['favData'],
      staleTime: 1000,
    });
  }, []);

  return {
    toggleModal,
    listData: favData?.data?.data,
    onRefresh,
  };
};

export default useExploreScreen;
