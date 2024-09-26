import {useState} from 'react';
import {errorMessage} from '../../Config/NotificationMessage';

const useSearchBoxScreen = ({navigate}) => {
  const [search, setSearch] = useState(null);

  const onSearch = () => {
    if (search != null && search != '' && search != ' ')
      navigate('SearchScreen', search);
    else errorMessage('Search filed is empty');
  };

  return {onSearch, searchText: search, setSearch};
};

export default useSearchBoxScreen;
