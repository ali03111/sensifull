import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import API from '../../Utils/helperFunc';
import {getRecommdedUrl} from '../../Utils/Urls';

const useRecommendedMealScreen = () => {
  const {data} = useQuery({
    queryKey: ['allRecommded'],
    queryFn: () => API.get(getRecommdedUrl),
  });

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['allRecommded'],
      staleTime: 1000,
    });
  }, []);

  return {onRefresh, allData: data?.data};
};

export default useRecommendedMealScreen;
