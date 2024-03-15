import {ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import GoalsAndPurpose from '../../Components/GoalsAndPurpose';
import {step1} from '../../Utils/localDB';

const SettingGoalsScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View style={styles.goalsMain}>
        <GoalsAndPurpose title={'Purpose'} data={step1} />
      </View>
    </ImageBackground>
  );
};

export default memo(SettingGoalsScreen);
