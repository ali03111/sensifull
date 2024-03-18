import {Image, ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {arrowBack, stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import Allergies from '../../Components/Allergies';
import {Touchable} from '../../Components/Touchable';
import {SettingHeader} from '../../Components/SettingHeader';

const SettingAllergiesScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <SettingHeader
        goBack={() => navigation.goBack()}
        extraStyle={styles.headerStyle}
      />
      <Allergies onpress={() => navigation.navigate('Restrictions')} />
    </ImageBackground>
  );
};

export default memo(SettingAllergiesScreen);
