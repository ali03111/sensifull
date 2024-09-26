import {useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {searchMealUrl} from '../../Utils/Urls';
import {useCallback} from 'react';

const useSearchScreen = ({navigate}, {params}) => {
  const queryClient = useQueryClient();

  const searchData = useQuery({
    queryKey: ['searchData'],
    queryFn: () => API.get(searchMealUrl + params),
  });

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['searchData'],
      staleTime: 1000,
    });
  }, []);

  return {
    listData: searchData?.data?.data ?? [],
    onRefresh,
  };
};

export default useSearchScreen;
