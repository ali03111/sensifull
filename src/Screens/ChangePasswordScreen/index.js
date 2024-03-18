import {ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {passwordIcon, stepBg, lock} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {SettingHeader} from '../../Components/SettingHeader';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import useChangePasswordScreen from './useChangePasswordScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

const ChangePasswordScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues} =
    useChangePasswordScreen(navigation);
  return (
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={stepBg} style={styles.container}>
        <SettingHeader save={true} goBack={() => navigation.goBack()} />
        <TextComponent text={'Change Password ?'} styles={styles.title} />
        <TextComponent
          text={'We will get back to your account'}
          styles={styles.subTitle}
        />
        <View>
          <TextComponent text={'Old Password'} styles={styles.passText} />
          <InputComponent
            {...{
              name: 'password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Password*',
              isImage: lock,
              defaultValue: '',
              isSecure: true,
              isImage: passwordIcon,
              inputIconStyle: styles.lockstyle,
              viewStyle: styles.inputMain,
            }}
          />
          <TextComponent text={'New Password'} styles={styles.passText} />
          <InputComponent
            {...{
              name: 'new_password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'New Password*',
              isImage: lock,
              defaultValue: '',
              isSecure: true,
              isImage: passwordIcon,
              inputIconStyle: styles.lockstyle,
              viewStyle: styles.inputMain,
            }}
          />
          <InputComponent
            {...{
              name: 'confirm_password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Confirm Password*',
              isImage: lock,
              defaultValue: '',
              isSecure: true,
              isImage: passwordIcon,
              inputIconStyle: styles.lockstyle,
              viewStyle: styles.inputMain,
            }}
          />
          <ThemeButton title={'Save'} style={styles.saveBtn} />
        </View>
      </ImageBackground>
    </KeyBoardWrapper>
  );
};

export default memo(ChangePasswordScreen);
