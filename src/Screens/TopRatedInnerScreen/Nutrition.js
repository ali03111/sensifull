import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {stepBg, tabsBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {NutritionData} from '../../Utils/localDB';

export default function Nutrition() {
  const renderItems = useCallback(({item}) => {
    return (
      <View style={styles.dataMain}>
        <TextComponent text={item?.itemName} styles={styles.NameStyle} />
        <TextComponent text={item?.itemGrams} styles={styles.gramsStyle} />
      </View>
    );
  });

  return (
    <ImageBackground source={tabsBg} style={styles.nutritionTabs}>
      <FlatList
        data={NutritionData}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={styles.separatorStyle}></View>
        )}
      />
    </ImageBackground>
  );
}
