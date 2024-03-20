import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {stepBg, tabsBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {DirectionData} from '../../Utils/localDB';

export default function Directions() {
  const renderItems = useCallback(({item}) => {
    return (
      <View style={styles.directionDataMain}>
        <TextComponent text={item?.itemNumber} styles={styles.numberStyle} />
        <TextComponent text={item?.itemName} styles={styles.textStyle} />
      </View>
    );
  });

  return (
    <ImageBackground source={tabsBg} style={styles.directionTabs}>
      <FlatList
        data={DirectionData}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
      />
    </ImageBackground>
  );
}
