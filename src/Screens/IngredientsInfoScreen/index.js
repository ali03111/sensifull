import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import useIngredientsInfoScreen from './useIngredientsInfoScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {styles} from './styles';
import {allergyDot, allergyRed, noData, stepBg} from '../../Assets';
import {keyExtractor} from '../../Utils';
import ThemeButton from '../../Components/ThemeButton';

const IngredientsInfoScreen = ({navigation, route}) => {
  const {exactMatch, ingredient, likeMatches} = useIngredientsInfoScreen(
    navigation,
    route,
  );

  const renderItems = useCallback(({item, isAlergic}) => {
    return (
      <View style={isAlergic ? styles.ingredMainRed : styles.ingredMainGreen}>
        <View style={styles.allergiesInner}>
          <Image
            source={isAlergic ? allergyRed : allergyDot}
            style={isAlergic ? styles.allergiesIcon : styles.allergiesIconGreen}
          />
          <TextComponent
            text={item}
            styles={styles.ingredTextStyle(isAlergic)}
          />
        </View>
      </View>
    );
  });

  const FlatListView = ({title, arry, isAlergic}) => {
    return (
      <View style={styles.whiteView}>
        <TextComponent text={title} styles={styles.titleStyle} />
        <FlatList
          data={arry}
          renderItem={({item, index}) => renderItems({item, isAlergic})}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ListEmptyComponent={
            <View>
              <Image source={noData} style={styles.noDataImage} />
              <TextComponent
                text={'No match found'}
                styles={styles.noDataSubTitle}
              />
            </View>
          }
        />
      </View>
    );
  };

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <HeaderWithFilterAndBack
        Text={'Ingredients Info'}
        goBack={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <FlatListView title={'Ingredients'} arry={ingredient} />
        <FlatListView title={'Alergic'} arry={exactMatch} isAlergic={true} />
        <FlatListView title={'May be alergic'} arry={likeMatches} />
        <ThemeButton
          title={'Go Back'}
          style={styles.btnStyle}
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default memo(IngredientsInfoScreen);
