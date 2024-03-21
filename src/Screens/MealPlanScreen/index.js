import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';
import {noData, stepBg} from '../../Assets';
import {styles} from './styles';

import useMealPlanScreen from './useMealPlanScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';

const MealPlanScreen = ({navigation}) => {
  const {} = useMealPlanScreen(navigation);

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Meals Plan'}
        />
        <View style={styles.mealInner}>
          <Image source={noData} style={styles.noDataImage} />
          <TextComponent text={'No Plans Yet!'} styles={styles.noDataTitle} />
          <TextComponent
            text={'Create Meal plans.'}
            styles={styles.noDataSubTitle}
          />
          <ThemeButton title={'Create Plan'} style={styles.saveBtn} />
        </View>
      </ImageBackground>
    </>
  );
};

export default memo(MealPlanScreen);
