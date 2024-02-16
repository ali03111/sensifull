import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useReduxStore from '../Hooks/UseReduxStore';
import NavigationService from '../Services/NavigationService';
import * as Screens from '../Screens/index';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const {getState} = useReduxStore();
  const {onboarding} = getState('onboarding');
  const {isLogin} = getState('Auth');

  return (
    <NavigationContainer
      ref={ref => {
        NavigationService.setRef(ref);
        // const p = NavigationService.getCurrentRoute(ref.getCurrentRoute());
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>
        {!onboarding && (
          <Stack.Screen
            name="OnBoardScreen"
            component={Screens.OnBoardScreen}
          />
        )}
        {!isLogin && (
          <>
            <Stack.Screen name="StepScreen" component={Screens.StepScreen} />
            <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={Screens.RegisterScreen}
            />
          </>
        )}
        {isLogin && (
          <>
            <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
