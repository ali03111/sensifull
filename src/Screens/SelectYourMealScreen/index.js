import React, {memo, useCallback, useState} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, recommendedData} from '../../Utils/localDB';
import useSelectYourMealScreen from './useSelectYourMealScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {Header} from './Header';
import {keyExtractor} from '../../Utils';
import {hp} from '../../Config/responsive';
import {ServingModal} from './ServingModal';
import BlurImage from '../../Components/BlurImage';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';

const SelectYourMealScreen = ({navigation, route}) => {
  const {
    mealsData,
    mealPlan,
    modal1Visible,
    setModal1Visible,
    onSelectValue,
    onSaveData,
  } = useSelectYourMealScreen(navigation, route);

  const RenderTodayPopular = useCallback(
    ({item, index}) => {
      return (
        <Touchable
          style={styles.mealItem}
          onPress={() => {
            onSelectValue('mealObj', item);
            navigation.navigate('TopRatedInnerScreen', {
              mealData: {...item, isEdit: true},
              onServingSelect: ({meal, serving}) => {
                onSelectValue('meals', meal);
                onSelectValue('serving', serving);
                onSaveData({meal, serving});
              },
            });
            // setModal1Visible(true);
          }}>
          <BlurImage uri={item?.image} isURI={true} styles={styles.mealImage} />
          <TextComponent
            numberOfLines={2}
            text={item?.name}
            styles={styles.mealTitle}
          />
        </Touchable>
      );
    },
    [mealsData],
  );

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <Header goBack={() => navigation.goBack()} Text={'Select Meal Plan'} />
      <View style={styles.popularTop}>
        <AniFlatOneByOne
          data={mealsData?.meals}
          flatViewStyle={{
            paddingBottom: hp('50'),
            alignSelf: 'center',
          }}
          flatListProps={{
            numColumns: 2,
          }}
          InnerCompnonet={(item, index) => (
            <RenderTodayPopular item={item} index={index} />
          )}
        />
        <ServingModal
          isVisible={modal1Visible}
          onClose={() => setModal1Visible(false)}
          title="How many servings ?"
          content="Choose the number of servings."
          onSelectVal={val => onSelectValue('serving', val)}
          selectedValue={mealPlan?.serving}
          onConfirm={onSaveData}
        />
      </View>
    </ImageBackground>
  );
};

export default memo(SelectYourMealScreen);
