import React, {useState} from 'react';
import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {getPurposeUrl, savePurposeUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useSettingGoalsScreen = () => {
  const [selectedVal, setSelectedVal] = useState(null);

  const {data} = useQuery({
    queryKey: ['getPurpose'],
    queryFn: () => API.get(getPurposeUrl),
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(savePurposeUrl, {id: selectedVal});
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  return {
    allData: data?.data,
    selectedVal,
    setSelectedVal,
    apiSelectVal: data?.data?.user_purpose?.id,
    onSave: mutate,
  };
};

export default useSettingGoalsScreen;
