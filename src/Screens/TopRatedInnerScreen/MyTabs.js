import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {memo} from 'react';
import Nutrition from './Nutrition';
import Ingredients from './Ingredients';
import Directions from './Directions';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {styles} from './styles';
import {View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const MyTabs = ({
  toggleModal,
  modalVisible,
  ingredients,
  nutritions,
  directions,
}) => {
  return (
    <View style={styles.tabMain}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: Colors.lightTextGray,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          activeTintColor: Colors.primaryColor,
          tabBarPressColor: Colors.transparent,
          tabBarLabelStyle: {fontWeight: 600},
          tabBarItemStyle: {height: hp('5'), borderColor: 'red'},
          tabBarStyle: {
            backgroundColor: 'transparent',
            shadowOpacity: 0,
            shadowColor: 'transparent',
          },
        }}>
        <Tab.Screen name="Ingredients">
          {() => (
            <Ingredients
              toggleModal={toggleModal}
              modalVisible={modalVisible}
              ingredients={ingredients}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Nutrition">
          {() => <Nutrition nutritions={nutritions} />}
        </Tab.Screen>
        <Tab.Screen name="Directions">
          {() => <Directions directions={directions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};
