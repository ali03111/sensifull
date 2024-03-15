import {ImageBackground} from 'react-native';
import React, {memo} from 'react';
import {stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import Allergies from '../../Components/Allergies';

const SettingAllergiesScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <Allergies onpress={() => navigation.navigate('Restrictions')} />
    </ImageBackground>
  );
};

export default memo(SettingAllergiesScreen);
