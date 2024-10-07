import {useState} from 'react';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {addFvMealUrl, getSearchHistoryUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useSearchBoxScreen = ({navigate}) => {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState(null);

  const searchHistory = useQuery({
    queryKey: ['searchHistory'],
    queryFn: () => API.get(getSearchHistoryUrl),
  });

  const onSearch = item => {
    if (
      (search || item) != null &&
      (search || item) != '' &&
      (search || item) != ' ' &&
      (search || item) != undefined
    ) {
      queryClient.invalidateQueries({queryKey: ['favData']});
      queryClient.invalidateQueries({queryKey: ['searchHistory']});
      navigate('SearchScreen', search ?? item);
      setSearch(null);
    } else errorMessage('Search filed is empty');
  };

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(addFvMealUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        successMessage(data?.message);
        queryClient.invalidateQueries({queryKey: ['favData']});
        queryClient.invalidateQueries({queryKey: ['searchHistory']});
      } else errorMessage(data?.message);
    },
  });

  const toggleFav = item => {
    mutate({
      meal_id: item?.id,
    });
  };

  return {
    onSearch,
    searchText: search,
    setSearch,
    searchHistory: searchHistory?.data?.data,
    toggleFav,
  };
};

export default useSearchBoxScreen;
