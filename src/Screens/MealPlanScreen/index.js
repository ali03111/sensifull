import React, {memo, useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {arrDown, arrRightGray, noData, stepBg} from '../../Assets';
import {styles} from './styles';

import useMealPlanScreen from './useMealPlanScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {DataNotFound} from '../../Components/DataNotFound';
import Collapsible from 'react-native-collapsible';
import {Touchable} from '../../Components/Touchable';
import {SelectableBtn} from '../../Components/SelectableBtn';

const MealPlanScreen = ({navigation}) => {
  const {} = useMealPlanScreen(navigation);

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Meals Plan'}
          />
          <DataNotFound
            title={'No Plans Yet!'}
            subTitle={'Create Meal plans.'}
            btnTitle={'Create Plan'}
            onpress={() => navigation.navigate('CreateMealPlanScreen')}
          />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(MealPlanScreen);
