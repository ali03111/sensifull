import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData} from '../../Utils/localDB';
import useTodayPopularScreen from './useTodayPopularScreen';
import {goBack} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';

const TodayPopularScreen = ({navigation}) => {
  const {} = useTodayPopularScreen(navigation);

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
          {/* <View style={styles.topRatedMain}>
            <Touchable onPress={() => navigation.goBack()}>
              <Image source={arrowBack} style={styles.arrBack} />
            </Touchable>
            <TextComponent text={'Today’s Popular'} styles={styles.viewAll} />
            <Touchable>
              <Image source={filter1} style={styles.arrBack} />
            </Touchable>
          </View> */}
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Today’s Popular'}
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

export default memo(TodayPopularScreen);
