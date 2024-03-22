import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {addCirlce, arrDown, arrRightGray} from '../Assets';
import Collapsible from 'react-native-collapsible';
import {SelectableBtn} from './SelectableBtn';
import {Touchable} from './Touchable';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';

export const SelectedMealPlans = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
  };
  return (
    <View style={styles.mainBtn}>
      <View style={styles.mainBtnInner}>
        <TouchableOpacity onPress={toggleCollapsed} style={styles.toggleBtn}>
          <TextComponent text={'Breakfast'} styles={styles.btnText} />
          <Image source={arrDown} style={styles.arrStyle} />
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          {/* Your collapsible content goes here */}
          <View style={styles.selectableBtnStyle}>
            <SelectableBtn
              title="Breakfast"
              selected={selectedButton === 1}
              onPress={() => handleButtonPress(1)}
            />
            <SelectableBtn
              title="Lunch"
              selected={selectedButton === 2}
              onPress={() => handleButtonPress(2)}
            />
            <SelectableBtn
              title="Dinner"
              selected={selectedButton === 3}
              onPress={() => handleButtonPress(3)}
            />
          </View>
        </Collapsible>
      </View>
      <View style={styles.TouchableMain}>
        <View style={styles.servingsMain}>
          <TextComponent text={'Select Meal, '} styles={styles.btnText} />
          <TextComponent text={'3 Servings'} styles={styles.servings} />
        </View>
        <Touchable>
          <Image source={addCirlce} style={styles.arrRight} />
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    backgroundColor: '#fcf8e9',
    marginHorizontal: wp('4'),
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2.5'),
    marginVertical: hp('1.5'),
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  mainBtnInner: {
    borderBottomWidth: 0.3,
    borderColor: Colors.textGrayColor,
    paddingBottom: hp('1.5'),
  },
  arrStyle: {
    resizeMode: 'contain',
    width: wp('4'),
  },
  toggleBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.black,
    fontWeight: 600,
  },
  TouchableMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: hp('1'),
    paddingTop: hp('1.5'),
  },
  arrRight: {
    resizeMode: 'contain',
    width: wp('8'),
    height: hp('4'),
  },
  selectableBtnStyle: {
    flexDirection: 'row',
  },
  servingsMain: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  servings: {
    color: Colors.textGrayColor,
    fontSize: hp('1.8'),
  },
});
