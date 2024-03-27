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

const TopRatedFavScreen = ({navigation}) => {
  const {} = useTopRatedFavScreen(navigation);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <ImageBackground source={item?.image} style={styles.popularMain}>
        <ImageBackground source={favShadow} style={styles.shadow}>
          <View style={styles.titleMain}>
            <View>
              <TextComponent
                numberOfLines={2}
                text={item?.title}
                styles={styles.popularTitle}
              />
              <TextComponent text={'Breakfast'} styles={styles.catTitle} />
            </View>
            <Touchable
              style={styles.popularBtn}
              onPress={() => navigation.navigate('TopRatedInnerScreen')}>
              <Image source={favFilled} style={styles.filledIcon} />
            </Touchable>
          </View>
        </ImageBackground>
      </ImageBackground>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Favorites'}
        />

        <View style={styles.popularTop}>
          <FlatList
            data={topRatedData}
            renderItem={renderTodayPopular}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: hp('13')}}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedFavScreen);
