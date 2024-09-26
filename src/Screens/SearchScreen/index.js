import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import useSearchScreen from './useSearchScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {Touchable} from '../../Components/Touchable';
import BlurImage from '../../Components/BlurImage';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import {hp, wp} from '../../Config/responsive';
import {DataNotFound} from '../../Components/DataNotFound';
import {stepBg} from '../../Assets';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';

const SearchScreen = ({navigation, route}) => {
  const {listData, onRefresh} = useSearchScreen(navigation, route);

  const RenderTodayPopular = useCallback(
    ({item, index}) => {
      return (
        <Touchable
          style={styles.mealItem}
          onPress={() => {
            navigation.navigate('TopRatedInnerScreen', {
              mealData: item,
            });
          }}>
          <BlurImage
            uri={item?.image}
            isURI={true}
            styles={styles.mealImage}
            blurStyle={styles.blurImgStyle}
          />
          <TextComponent
            numberOfLines={2}
            text={item?.name}
            styles={styles.mealTitle}
          />
        </Touchable>
      );
    },
    [listData],
  );

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <HeaderWithFilterAndBack
        goBack={() => navigation.goBack()}
        Text={'Search'}
      />

      <AniFlatOneByOne
        data={listData}
        flatViewStyle={styles.upComingFlatlistView}
        onRefresh={onRefresh}
        flatListProps={{
          numColumns: 2,
          ListEmptyComponent: (
            <DataNotFound
              onpress={onRefresh}
              btnStyles={{width: wp('80')}}
              mainViewStyles={{marginTop: hp('18')}}
            />
          ),
        }}
        InnerCompnonet={(item, index) => (
          <RenderTodayPopular item={item} index={index} />
        )}
      />
    </ImageBackground>
  );
};

export default memo(SearchScreen);
