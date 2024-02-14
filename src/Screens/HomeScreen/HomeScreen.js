import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Touchable} from '../../Components/Touchable';
import {logOutUser} from '../../Redux/Action/AuthAction';
import useReduxStore from '../../Hooks/UseReduxStore';

const HomeScreen = () => {
  const {dispatch} = useReduxStore();

  return (
    <View>
      <Text>Home</Text>
      <Touchable onPress={() => dispatch(logOutUser())}>
        <Text>logout</Text>
      </Touchable>
    </View>
  );
};

export default HomeScreen;
