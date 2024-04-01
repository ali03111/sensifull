import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  getIngredientsUrl,
  getRestrictionUrl,
  saveIngredientsUrl,
  saveRestrictionUrl,
} from '../../Utils/Urls';
import {useMutation, useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {
  getIdsFromArry,
  removeKeyAndReturnArry,
} from '../../Utils/globalFunctions';

export default function useSettingAllergiesScreen() {
  const [selectedVal, setSelectedVal] = useState(null);

  const {data} = useQuery({
    queryKey: ['getAllerigies'],
    queryFn: () => API.get(getIngredientsUrl),
  });

  console.log('ksjdbvkjsdbvkjlbdskjvbsdkvbsdbvls,dbvds', data?.data);

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(saveIngredientsUrl, {
        allergies: getIdsFromArry(selectedVal, 'id'),
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
    apiSelectVal: data?.data?.user_allergies,
    onSave: () => mutate(),
  };
}

const styles = StyleSheet.create({});
