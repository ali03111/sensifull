import {useMutation} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {getShoppingListUrl} from '../../Utils/Urls';
import {errorMessage} from '../../Config/NotificationMessage';
import API from '../../Utils/helperFunc';
import {currentDateformat} from '../../Utils/globalFunctions';

const useShoppingListScreen = ({navigate}, {params}) => {
  const activeDate = params;
  const currentDate = new Date();

  console.log('currentDatecurrentDatecurrentDatecurrentDatecurrentDate');

  const [checkedItems, setCheckedItems] = useState([]);
  const [filterModal, setFilterModal] = useState(false);

  const toggleModal = () => {
    setFilterModal(!filterModal);
  };

  const toggleCheck = itemName => {
    if (checkedItems.includes(itemName)) {
      setCheckedItems(checkedItems.filter(item => item !== itemName));
    } else {
      setCheckedItems([...checkedItems, itemName]);
    }
  };
  const clearSelection = () => {
    setCheckedItems([]);
  };

  const [date, setDate] = useState({
    startDate: activeDate,
    endDate: currentDateformat(),
  });

  const [shoppingData, setShoppingData] = useState([]);

  const {endDate, startDate} = date;

  const updateState = data => setDate(prev => ({...prev, ...data}));

  const onSelectValue = (key, val) => {
    updateState({[key]: val});
  };

  const {mutate} = useMutation({
    mutationFn: body => {
      if (body?.startDate) {
        onSelectValue('startDate', body?.startDate);
        onSelectValue('endDate', body?.endDate);
      }
      return API.post(
        getShoppingListUrl,
        body?.startDate
          ? {
              from_date: body?.startDate,
              to_date: body?.endDate,
            }
          : {
              from_date: startDate ?? activeDate,
              to_date: endDate,
            },
      );
    },
    onSuccess: ({ok, data}) => {
      console.log(
        'dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjsdfsdfbvsdbkvsdbvsdjk',
        data,
      );
      if (ok) {
        setShoppingData(data);
        // successMessage('Your profile sucessfully updated!');
        // // dispatch({type: types.UpdateProfile, payload: data.data});
      } else errorMessage(data?.message);
    },
  });

  useEffect(mutate, []);

  return {
    shoppingData,
    onFilter: ({startDate, endDate}) => {
      mutate({startDate, endDate});
    },
    onSelectValue,
    date,
    toggleCheck,
    clearSelection,
    checkedItems,
    toggleModal,
    filterModal,
  };
};

export default useShoppingListScreen;
