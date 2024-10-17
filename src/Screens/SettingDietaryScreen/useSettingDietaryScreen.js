import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {getRestrictionUrl, saveRestrictionUrl} from '../../Utils/Urls';
import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {
  getIdsFromArry,
  removeKeyAndReturnArry,
} from '../../Utils/globalFunctions';

export default function useSettingDietaryScreen() {
  const [selectedVal, setSelectedVal] = useState([]);

  const {data} = useQuery({
    queryKey: ['getRestrictions'],
    queryFn: async () => {
      const {ok, data} = await API.get(getRestrictionUrl);
      if (ok) setSelectedVal(data?.user_restrictions);
      return data;
    },
  });

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(saveRestrictionUrl, {
        restrictions: getIdsFromArry(selectedVal, 'id'),
      });
    },
    onSuccess: ({ok, data}) => {
      console.log('dbhvjklsdbjkvbdsjkbvkdsbvsbdjkvbsdkjbvsdbkvsdbvsdjk', data);
      if (ok) {
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  return {
    allData: data,
    selectedVal,
    setSelectedVal,
    apiSelectVal: selectedVal,
    onSave: () => mutate(),
  };
}

const styles = StyleSheet.create({});
