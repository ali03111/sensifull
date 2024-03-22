import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const SelectableBtn = ({title, selected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected ? styles.selected : null]}>
      <Text style={[styles.buttonText, selected ? styles.selectedText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: hp('4'),
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.themeGreen,
    paddingHorizontal: wp('3'),
    marginHorizontal: wp('1'),
    marginVertical: hp('.5'),
    marginTop: hp('1.5'),
  },
  buttonText: {
    fontSize: 16,
  },
  selected: {
    backgroundColor: Colors.themeGreen,
    borderColor: Colors.themeGreen,
  },
  selectedText: {
    color: Colors.white,
  },
});
