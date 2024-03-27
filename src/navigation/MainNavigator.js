import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useReduxStore from '../Hooks/UseReduxStore';
import NavigationService from '../Services/NavigationService';
import * as Screens from '../Screens/index';
import MybottomTabs from './bottomNavigation';

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
          <>
            <Stack.Screen
              name="OnBoardScreen"
              component={Screens.OnBoardScreen}
            />
          </>
        )}
        {!isLogin && (
          <>
            <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
            <Stack.Screen
              name="RegisterScreen"
              component={Screens.RegisterScreen}
            />

            {/* <Stack.Screen name="MybottomTabs" component={MybottomTabs} /> */}
          </>
        )}
        {isLogin && (
          <>
            <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
            <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
            <Stack.Screen
              name="MealPlanScreen"
              component={Screens.MealPlanScreen}
            />
            <Stack.Screen
              name="CreateMealPlanScreen"
              component={Screens.CreateMealPlanScreen}
            />
            <Stack.Screen
              name="SelectYourMealScreen"
              component={Screens.SelectYourMealScreen}
            />

            {/* <Stack.Screen
            name="SettingDietaryScreen"
            component={Screens.SettingDietaryScreen}
          /> */}
            <Stack.Screen name="StepScreen" component={Screens.StepScreen} />
            <Stack.Screen
              name="Restrictions"
              component={Screens.Restrictions}
            />
            <Stack.Screen
              name="AllergiesList"
              component={Screens.AllergiesList}
            />
            <Stack.Screen
              name="SettingGoalsScreen"
              component={Screens.SettingGoalsScreen}
            />
            <Stack.Screen
              name="SettingAllergiesScreen"
              component={Screens.SettingAllergiesScreen}
            />
            <Stack.Screen
              name="SettingDietaryScreen"
              component={Screens.SettingDietaryScreen}
            />
            <Stack.Screen
              name="ChangePasswordScreen"
              component={Screens.ChangePasswordScreen}
            />
            <Stack.Screen
              name="TodayPopularScreen"
              component={Screens.TodayPopularScreen}
            />
            <Stack.Screen
              name="TopRatedMealScreen"
              component={Screens.TopRatedMealScreen}
            />
            <Stack.Screen
              name="TopRatedInnerScreen"
              component={Screens.TopRatedInnerScreen}
            />
            <Stack.Screen
              name="TopRatedFavScreen"
              component={Screens.TopRatedFavScreen}
            />
            <Stack.Screen
              name="RecommendedMealScreen"
              component={Screens.RecommendedMealScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
