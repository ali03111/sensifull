import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {stepBg, tabsBg} from '../../Assets';

export default function Ingredients() {
  return (
    <ImageBackground source={tabsBg} style={styles.bgTabs}>
      <Text>Ingredients</Text>
    </ImageBackground>
  );
}
