import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, favShadow, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, topRatedData} from '../../Utils/localDB';
import useTopRatedMealScreen from './useTopRatedMealScreen';
import {goBack} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';

const TopRatedMealScreen = ({navigation}) => {
  const {} = useTopRatedMealScreen(navigation);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <ImageBackground source={item?.image} style={styles.popularMain}>
        <ImageBackground source={favShadow} style={styles.shadow}>
          <View style={styles.titleMain}>
            <TextComponent
              numberOfLines={2}
              text={item?.title}
              styles={styles.popularTitle}
            />
            <Touchable
              style={styles.popularBtn}
              onPress={() => navigation.navigate('TopRatedInnerScreen')}>
              <TextComponent
                text={'View Recipe'}
                styles={styles.popularBtnText}
              />
            </Touchable>
          </View>
        </ImageBackground>
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
          <TextComponent
            text={'Showing 35 results of Break Fast!'}
            styles={styles.searchText}
          />
          <View style={styles.popularTop}>
            <FlatList
              data={topRatedData}
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
