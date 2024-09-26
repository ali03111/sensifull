import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, favFilled, favShadow, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, topRatedData} from '../../Utils/localDB';
import useTopRatedFavScreen from './useTopRatedFavScreen';
import {goBack} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {hp} from '../../Config/responsive';
import {DataNotFound} from '../../Components/DataNotFound';

const TopRatedFavScreen = ({navigation}) => {
  const {listData, toggleModal, onRefresh} = useTopRatedFavScreen(navigation);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <Touchable
        onPress={() =>
          navigation.navigate('TopRatedInnerScreen', {
            mealData: item,
          })
        }>
        <ImageBackground source={{uri: item?.image}} style={styles.popularMain}>
          <ImageBackground source={favShadow} style={styles.shadow}>
            <View style={styles.titleMain}>
              <View>
                <TextComponent
                  numberOfLines={2}
                  text={item?.name}
                  styles={styles.popularTitle}
                />
                <TextComponent
                  text={item?.category_active?.name}
                  styles={styles.catTitle}
                />
              </View>
              <Touchable
                style={styles.popularBtn}
                onPress={() => toggleModal(item)}>
                <Image source={favFilled} style={styles.filledIcon} />
              </Touchable>
            </View>
          </ImageBackground>
        </ImageBackground>
      </Touchable>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Favorites'}
        />

        <FlatList
          data={listData}
          renderItem={renderTodayPopular}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: hp('13'), marginTop: hp('2')}}
          refreshing={false}
          onRefresh={onRefresh}
          ListEmptyComponent={
            <DataNotFound
              mainViewStyles={{marginTop: hp('17')}}
              onpress={onRefresh}
            />
          }
        />
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedFavScreen);
