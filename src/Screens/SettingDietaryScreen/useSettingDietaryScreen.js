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
  const [selectedVal, setSelectedVal] = useState(null);

  const {data} = useQuery({
    queryKey: ['getRestrictions'],
    queryFn: () => API.get(getRestrictionUrl),
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
    allData: data?.data,
    selectedVal,
    setSelectedVal,
    apiSelectVal: data?.data?.user_restrictions,
    onSave: () => mutate(),
  };
}

const styles = StyleSheet.create({});
