import React, {memo, useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {arrDown, arrRightGray, noData, stepBg} from '../../Assets';
import {styles} from './styles';

import useCreateMealPlanScreen from './useCreateMealPlanScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import Collapsible from 'react-native-collapsible';
import {Touchable} from '../../Components/Touchable';
import {SelectableBtn} from '../../Components/SelectableBtn';
import {SelectedMealPlans} from '../../Components/SelectedMealPlans';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {Colors} from '../../Theme/Variables';
import UseCalendar from '../../Components/Calendar';
import {Header} from './Header';
import ThemeButton from '../../Components/ThemeButton';
import {hp, wp} from '../../Config/responsive';
import {errorMessage} from '../../Config/NotificationMessage';
import {capitalizeFirstLetter} from '../../Utils/globalFunctions';

const CreateMealPlanScreen = ({navigation}) => {
  const {
    catData,
    reduxMealPlans,
    dynamicRoute,
    getDataFromScreen,
    handleButtonPress,
    selectedButton,
    collapsed,
    toggleCollapsed,
    createPlan,
    selectedDate,
    setSelectedDate,
    bookDates,
  } = useCreateMealPlanScreen(navigation);

  console.log(
    'reduxMealPlansreduxMealPlansreduxMealPlansreduxMealPlansreduxMealPlansreduxMealPlans',
    reduxMealPlans,
  );

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Create Your Meal'}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <View style={styles.calenderMain}>
            <UseCalendar
              onSelectVal={d => setSelectedDate(d)}
              selectedVal={selectedDate}
              markedDates={bookDates ?? []}
            />
          </View>
          {Array.isArray(reduxMealPlans) && reduxMealPlans?.length > 0 ? (
            reduxMealPlans?.map(res => (
              <SelectedMealPlans
                category={selectedButton ?? res?.category}
                mealsPlan={res?.pivot ? res : res?.category?.meals}
                serving={res?.pivot?.serving ?? res?.category?.serving}
                handleButtonPress={e => {
                  console.log('kjsbdvkjsbdklvbsdklbvlds', e);
                  handleButtonPress(e);
                }}
                allCatergory={catData}
                onPress={() =>
                  dynamicRoute('SelectYourMealScreen', {
                    catData: res?.category,
                    getDataFromScreen: getDataFromScreen,
                  })
                }
              />
            ))
          ) : (
            <View style={styles.mainBtn}>
              <View style={styles.mainBtnInner}>
                <TouchableOpacity
                  onPress={toggleCollapsed}
                  disabled={true}
                  style={styles.toggleBtn}>
                  <TextComponent text={'Choose Plan'} styles={styles.btnText} />
                  {/* <Image source={arrDown} style={styles.arrStyle} /> */}
                </TouchableOpacity>
                <Collapsible collapsed={false}>
                  {/* Your collapsible content goes here */}
                  <View style={styles.selectableBtnStyle}>
                    {catData?.map(res => {
                      return (
                        <SelectableBtn
                          title={capitalizeFirstLetter(res?.name)}
                          selected={selectedButton?.id == res?.id}
                          onPress={() => handleButtonPress(res)}
                        />
                      );
                    })}
                  </View>
                </Collapsible>
              </View>
              {/* <Touchable
                style={styles.TouchableMain}
                onPress={() => {
                  if (selectedButton?.id != null) {
                    dynamicRoute('SelectYourMealScreen', {
                      catData: catData.filter(
                        res => res?.id == selectedButton?.id,
                      )[0],
                      getDataFromScreen: getDataFromScreen,
                    });
                  } else errorMessage('Please select plan first');
                }}>
                <TextComponent text={'Select Meal'} styles={styles.btnText} />
                <Image source={arrRightGray} style={styles.arrRight} />
              </Touchable> */}
            </View>
          )}
          {reduxMealPlans?.length > 0 && (
            <ThemeButton
              title={'Save'}
              onPress={createPlan}
              style={styles.btnStyle}
            />
          )}
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(CreateMealPlanScreen);
