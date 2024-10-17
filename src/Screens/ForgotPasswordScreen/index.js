import {ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {passwordIcon, stepBg, lock} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {SettingHeader} from '../../Components/SettingHeader';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import useForgotPasswordScreen from './useForgotPasswordScreen';

const ForgotPasswordScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, forgotPassword} =
    useForgotPasswordScreen(navigation);
  return (
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={stepBg} style={styles.container}>
        <SettingHeader goBack={() => navigation.goBack()} />
        <TextComponent text={'Forgot Password ?'} styles={styles.title} />
        <TextComponent
          text={
            "Provide your account's email for which you want to reset your password."
          }
          styles={styles.subTitle}
        />
        <View>
          <TextComponent text={'Email'} styles={styles.passText} />
          <InputComponent
            {...{
              name: 'email',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Email*',
              isImage: lock,
              defaultValue: '',
              inputIconStyle: styles.lockstyle,
              viewStyle: styles.inputMain,
            }}
          />
          <ThemeButton
            title={'Save'}
            style={styles.saveBtn}
            onPress={handleSubmit(forgotPassword)}
          />
        </View>
      </ImageBackground>
    </KeyBoardWrapper>
  );
};

export default memo(ForgotPasswordScreen);
