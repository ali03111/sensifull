import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextComponent} from './TextComponent';
import ThemeButton from './ThemeButton';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {noData} from '../Assets';

export const DataNotFound = ({title, subTitle, onpress, btnTitle}) => {
  return (
    <View style={styles.mealInner}>
      <Image source={noData} style={styles.noDataImage} />
      <TextComponent text={title} styles={styles.noDataTitle} />
      <TextComponent text={subTitle} styles={styles.noDataSubTitle} />
      <ThemeButton title={btnTitle} style={styles.saveBtn} onPress={onpress} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealInner: {
    marginTop: hp('-10'),
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('4'),
  },
  noDataImage: {
    width: wp('35'),
    height: hp('17.5'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  noDataTitle: {
    fontSize: hp('3.5'),
    textAlign: 'center',
    fontWeight: 600,
    color: Colors.primaryColor,
  },
  noDataSubTitle: {
    fontSize: hp('2'),
    textAlign: 'center',
    color: Colors.textGrayColor,
    marginBottom: hp('6'),
  },
});
