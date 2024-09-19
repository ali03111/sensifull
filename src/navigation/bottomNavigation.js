import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, StyleSheet, Image} from 'react-native';
import * as Screens from '../Screens/index';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {
  setting1,
  home1,
  home,
  barcode1,
  barcode,
  recipe,
  tasklist1,
  tasklist,
  setting,
  home2,
} from '../Assets';
import useReduxStore from '../Hooks/UseReduxStore';
import {fetchGetWithToken} from '../Utils/helperFunc';
import {verifyUserUrl} from '../Utils/Urls';
globalStyles = {};
const tabarComponent = (activeImage, unActiveImage, ImageStyle) => {
  return {
    tabBarIcon: ({focused}) => (
      <View style={styles.tabarView(focused)}>
        <Image
          style={{...styles.imgstyle, ...ImageStyle}}
          source={focused ? activeImage : unActiveImage}
        />
      </View>
    ),
    title: '',
    tabBarLabelStyle: styles.tabarTitle,
  };
};

const Tab = createBottomTabNavigator();

function MybottomTabs() {
  fetchGetWithToken(verifyUserUrl);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: 'transparent',
        headerShown: false,
        // tabBarActiveBackgroundColor: 'black',
        // tabBarInactiveBackgroundColor: 'black',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarStyle: {
          height: Platform.OS == 'ios' ? hp('10') : hp('9'),
          width: wp('100'),
          alignSelf: 'center',
          backgroundColor: 'white',
          backfaceVisibility: 'hidden',
          borderWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingBottom: Platform.OS == 'ios' ? hp('4') : 0,
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={tabarComponent(home1, home)}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="QRScreen"
        options={tabarComponent(barcode1, barcode)}
        component={Screens.CodeScannerScreen}
      />
      <Tab.Screen
        name="Notification"
        options={tabarComponent(
          recipe,
          recipe,
          (ImageStyle = {
            width: wp('12'),
            height: hp('6'),
          }),
        )}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="MealPlanScreen"
        options={tabarComponent(tasklist1, tasklist)}
        component={Screens.MealPlanScreen}
      />
      <Tab.Screen
        name="SettingScreen"
        options={tabarComponent(setting1, setting)}
        component={Screens.SettingScreen}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
  },
  tabarTitle: {
    display: 'none',
  },
  tabarView: (focused, last) => ({
    width: 'auto',
    // borderTopWidth: focused ? 3 : 0,
    // borderTopColor: focused ? Colors.primaryColor : null,
    // borderTopLeftRadius: 2,
    // borderTopRightRadius: 2,
  }),

  imgstyle: {
    resizeMode: 'contain',
    width: wp('6'),
    marginHorizontal: wp('2'),
    height: hp('8.5'),
    resizeMode: 'contain',
    top: Platform.OS == 'ios' ? hp('1.5') : 0,
  },
});
