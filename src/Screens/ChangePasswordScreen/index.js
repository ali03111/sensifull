import {ImageBackground} from 'react-native';
import React, {memo} from 'react';
import {stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';

const ChangePasswordScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <TextComponent text={'Change Password'} />
    </ImageBackground>
  );
};

export default memo(ChangePasswordScreen);
