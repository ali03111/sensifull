import {ImageBackground} from 'react-native';
import React, {memo} from 'react';
import {stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import DietaryRestrictions from '../../Components/DietaryRestrictions';

const SettingDietaryScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <DietaryRestrictions
        onpress={() => navigation.navigate('Restrictions')}
      />
    </ImageBackground>
  );
};

export default memo(SettingDietaryScreen);
