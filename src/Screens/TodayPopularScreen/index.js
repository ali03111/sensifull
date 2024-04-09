import React, {memo, useCallback} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  Platform,
} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData} from '../../Utils/localDB';
import useTodayPopularScreen from './useTodayPopularScreen';
import {goBack, keyExtractor} from '../../Utils';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {AniFlatOneByOne} from '../../AnimatedComp/AniFlatOneByOne';
import BlurImage from '../../Components/BlurImage';
import {hp, wp} from '../../Config/responsive';
import {DataNotFound} from '../../Components/DataNotFound';

const TodayPopularScreen = ({navigation}) => {
  const {allData, onRefresh} = useTodayPopularScreen(navigation);

  console.log('allDataallDataallDataallDataallDataallDataallData', allData);

  const RenderTodayPopular = useCallback(({item, index}) => {
    return (
      <BlurImage
        uri={item?.image}
        isURI={true}
        styles={styles.popularMain}
        radius={20}>
        <View style={styles.innerView}>
          <TextComponent text={item?.title} styles={styles.popularTitle} />
          <Touchable
            style={styles.popularBtn}
            onPress={() => navigation.navigate('TopRatedInnerScreen', item)}>
            <TextComponent
              text={'View Recipe'}
              styles={styles.popularBtnText}
            />
          </Touchable>
        </View>
      </BlurImage>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <View showsVerticalScrollIndicator={false}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Today’s Popular'}
            filterIcon={filter1}
          />
          <AniFlatOneByOne
            data={allData?.popular_list}
            onRefresh={onRefresh}
            flatViewStyle={styles.flatStyle}
            flatListProps={{
              ListEmptyComponent: (
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

export default memo(TodayPopularScreen);
