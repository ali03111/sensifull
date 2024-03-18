import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData} from '../../Utils/localDB';
import useTopRatedMealScreen from './useTopRatedMealScreen';
import {goBack} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';

const TopRatedMealScreen = ({navigation}) => {
  const {} = useTopRatedMealScreen(navigation);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <ImageBackground source={item?.image} style={styles.popularMain}>
        <TextComponent text={item?.title} styles={styles.popularTitle} />
        <Touchable style={styles.popularBtn}>
          <TextComponent text={'View Recipe'} styles={styles.popularBtnText} />
        </Touchable>
      </ImageBackground>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Top Rated Meals'}
            filterIcon={filter1}
          />
          <View style={styles.popularTop}>
            <FlatList
              data={popularData}
              renderItem={renderTodayPopular}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedMealScreen);
