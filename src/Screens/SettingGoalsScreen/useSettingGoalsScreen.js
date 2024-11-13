import React, {useState} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {getPurposeUrl, savePurposeUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useSettingGoalsScreen = () => {
  const [selectedVal, setSelectedVal] = useState([]);
  const [allData, setAllData] = useState([]);

  useQuery({
    queryKey: ['getPurpose'],
    queryFn: async () => {
      const {ok, data} = await API.get(getPurposeUrl);
      if (ok) {
        setSelectedVal(data?.user_purpose?.map(res => res?.id));
        setAllData(data);
      } else errorMessage('Error geting data');
      return data;
    },
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(savePurposeUrl, {ids: selectedVal});
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  return {
    allData,
    selectedVal,
    setSelectedVal,
    onSave: () => {
      if (selectedVal.length <= 2)
        errorMessage('Please select al teast 3 purposes');
      else mutate();
    },
  };
};

export default useSettingGoalsScreen;
