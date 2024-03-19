import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {stepBg, tabsBg} from '../../Assets';
import {styles} from './styles';

export default function Directions() {
  return (
    <ImageBackground source={tabsBg} style={styles.bgTabs}>
      <Text>Directions</Text>
    </ImageBackground>
  );
}
