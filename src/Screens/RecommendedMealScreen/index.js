import React, {memo, useCallback} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, recommendedData} from '../../Utils/localDB';
import useRecommendedMealScreen from './useRecommendedMealScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {hp, wp} from '../../Config/responsive';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import BlurImage from '../../Components/BlurImage';
import {DataNotFound} from '../../Components/DataNotFound';

const RecommendedMealScreen = ({navigation}) => {
  const {allData, onRefresh} = useRecommendedMealScreen(navigation);

  const RenderTodayPopular = useCallback(({item, index}) => {
    return (
      <Touchable
        style={styles.mealItem}
        onPress={() =>
          navigation.navigate('TopRatedInnerScreen', {
            mealData: item,
          })
        }>
        <BlurImage uri={item?.image} isURI={true} styles={styles.mealImage} />
        <TextComponent
          numberOfLines={2}
          text={item?.name}
          styles={styles.mealTitle}
        />
      </Touchable>
    );
  });

  console.log('lsdbvklsbdlkvbsdklvbds', allData);

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Recommended Meals'}
          filterIcon={filter1}
        />
        <AniFlatOneByOne
          data={allData?.recommended_list}
          flatViewStyle={styles.upComingFlatlistView}
          onRefresh={onRefresh}
          flatListProps={{
            numColumns: 2,
            ListEmptyComponent: (
              <DataNotFound onpress={onRefresh} btnStyles={{width: wp('80')}} />
            ),
          }}
          InnerCompnonet={(item, index) => (
            <RenderTodayPopular item={item} index={index} />
          )}
        />
      </ImageBackground>
    </>
  );
};

export default memo(RecommendedMealScreen);
