import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {stepBg, tabsBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {DirectionData} from '../../Utils/localDB';
import {keyExtractor} from '../../Utils';

export default function Directions({directions}) {
  const renderItems = useCallback(({item, index}) => {
    return (
      <View style={styles.directionDataMain}>
        <TextComponent text={index + 1} styles={styles.numberStyle} />
        <TextComponent text={item?.description} styles={styles.textStyle} />
      </View>
    );
  });

  return (
    <ImageBackground source={tabsBg} style={styles.directionTabs}>
      <FlatList
        data={directions}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
    </ImageBackground>
  );
}
