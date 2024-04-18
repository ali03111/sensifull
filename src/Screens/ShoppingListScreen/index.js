import React, {memo, useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {
  arrowBack,
  filter1,
  stepBg,
  tickcirclepurple,
  tickuncirclepurple,
} from '../../Assets';
import {styles} from './styles';
import {shoppingListData} from '../../Utils/localDB';
import useShoppingListScreen from './useShoppingListScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import ThemeButton from '../../Components/ThemeButton';
import {getDateMonthYear} from '../../Utils/globalFunctions';

const ShoppingListScreen = ({navigation, route}) => {
  const {
    date,
    onFilter,
    onSelectValue,
    shoppingData,
    clearSelection,
    toggleCheck,
    checkedItems,
  } = useShoppingListScreen(navigation, route);

  const renderItem = useCallback(({item, index}) => {
    console.log(index);
    return (
      <Pressable
        key={index}
        onPress={() => toggleCheck(item.name)}
        style={styles.Main}>
        <Image
          source={
            checkedItems.includes(item.name)
              ? tickcirclepurple
              : tickuncirclepurple
          }
          style={styles.Check}
        />
        <View style={{...styles.socialInner, ...styles.noBorder}}>
          <TextComponent text={item?.name} styles={styles.socialText} />
          <TextComponent text={item?.quantity} styles={styles.socialText} />
        </View>
      </Pressable>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <View showsVerticalScrollIndicator={false}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Shopping list'}
            filterIcon={filter1}
          />
          <View style={styles.popularTop}>
            <View style={styles.searchedTitle}>
              <TextComponent text={'Showing results from '} />
              <TextComponent
                text={`${getDateMonthYear(date.startDate).day} ${
                  getDateMonthYear(date.startDate).monthName
                } to ${getDateMonthYear(date.endDate).day} ${
                  getDateMonthYear(date.endDate).monthName
                }`}
                styles={styles.date}
              />
            </View>
            <View style={styles.catTitle}>
              <TextComponent text={'Ingredients '} styles={styles.date} />
              <TextComponent text={'Quantity'} styles={styles.date} />
            </View>
            <FlatList
              data={shoppingData} // Use the same data for the dots
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.dotList}
            />
          </View>
        </View>

        <ThemeButton
          title={'Clear Selected'}
          style={styles.btnMain}
          onPress={clearSelection}
        />
      </ImageBackground>
    </>
  );
};

export default memo(ShoppingListScreen);
