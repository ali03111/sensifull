import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, favShadow, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, topRatedData} from '../../Utils/localDB';
import useTopRatedMealScreen from './useTopRatedMealScreen';
import {goBack, keyExtractor} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {hp, wp} from '../../Config/responsive';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import {DataNotFound} from '../../Components/DataNotFound';

const TopRatedMealScreen = ({navigation}) => {
  const {allData, onRefresh, toggleModal} = useTopRatedMealScreen(navigation);

  const RenderTodayPopular = useCallback(({item, index}) => {
    return (
      <ImageBackground source={{uri: item?.image}} style={styles.popularMain}>
        <ImageBackground source={favShadow} style={styles.shadow}>
          <View style={styles.titleMain}>
            <TextComponent
              numberOfLines={2}
              text={item?.name}
              styles={styles.popularTitle}
            />
            <Touchable
              style={styles.popularBtn}
              onPress={() =>
                navigation.navigate('TopRatedInnerScreen', {
                  mealData: item,
                })
              }>
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
        <View showsVerticalScrollIndicator={false}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Today’s Popular'}
          />
          <AniFlatOneByOne
            data={allData}
            onRefresh={onRefresh}
            flatViewStyle={styles.flatStyle}
            flatListProps={{
              ListEmptyComponent: Array.isArray(allData) && (
                <DataNotFound
                  onpress={onRefresh}
                  btnStyles={{width: wp('60')}}
                  mainViewStyles={{marginTop: hp('20')}}
                />
              ),
            }}
            InnerCompnonet={(item, index) => <RenderTodayPopular item={item} />}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedMealScreen);
