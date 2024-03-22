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

const CreateMealPlanScreen = ({navigation}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = buttonIndex => {
    setSelectedButton(buttonIndex);
  };

  const [selected, setSelected] = useState('');

  const {} = useCreateMealPlanScreen(navigation);

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Create your Meal'}
          />
          <View style={styles.calenderMain}>
            <UseCalendar />
          </View>
          <SelectedMealPlans />
          <View style={styles.mainBtn}>
            <View style={styles.mainBtnInner}>
              <TouchableOpacity
                onPress={toggleCollapsed}
                style={styles.toggleBtn}>
                <TextComponent text={'Choose Plan'} styles={styles.btnText} />
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
            <Touchable
              style={styles.TouchableMain}
              onPress={() => navigation.navigate('SelectYourMealScreen')}>
              <TextComponent text={'Select Meal'} styles={styles.btnText} />
              <Image source={arrRightGray} style={styles.arrRight} />
            </Touchable>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(CreateMealPlanScreen);
