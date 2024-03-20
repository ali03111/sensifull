import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, recommendedData} from '../../Utils/localDB';
import useRecommendedMealScreen from './useRecommendedMealScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';

const RecommendedMealScreen = ({navigation}) => {
  const {} = useRecommendedMealScreen(navigation);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.mealItem}>
        <Image source={item?.image} style={styles.mealImage} />
        <TextComponent
          numberOfLines={2}
          text={item?.title}
          styles={styles.mealTitle}
        />
      </Touchable>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Recommended Meals'}
            filterIcon={filter1}
          />
          <View style={styles.popularTop}>
            <FlatList
              data={recommendedData}
              renderItem={renderTodayPopular}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={{
                alignItems: 'center',
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(RecommendedMealScreen);
