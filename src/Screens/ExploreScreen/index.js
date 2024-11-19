import {View, Text, ImageBackground, FlatList, Image} from 'react-native';
import React, {useCallback} from 'react';
import {favFilled, favShadow, stepBg, unFavFilled} from '../../Assets';
import {hp} from '../../Config/responsive';
import {DataNotFound} from '../../Components/DataNotFound';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import useExploreScreen from './useExploreScreen';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

const ExploreScreen = ({navigation}) => {
  const {listData, onRefresh, toggleModal} = useExploreScreen(navigation);

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
                <Image
                  source={item?.is_favorite ? favFilled : unFavFilled}
                  style={styles.filledIcon}
                />
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
        <HeaderWithFilterAndBack Text={'Explore'} />

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

export default ExploreScreen;
