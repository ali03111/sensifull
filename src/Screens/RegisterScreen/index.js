import React, {memo} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  lock,
  userIcon,
  phone,
  logo,
  rememberImg,
  rememberEmpty,
  username,
  emailIcon,
  passwordIcon,
  company,
  smallLogo,
  loginBg,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';

const RegisterScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    loginNav,
    signUpButton,
    PolicyValue,
    policy,
  } = useRegister(navigation);
  return (
    <ImageBackground source={loginBg} style={styles.logInMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginTop}>
          <View style={styles.dontHave}>
            <TextComponent
              text={'Log In'}
              onPress={loginNav}
              styles={styles.signUpText}
            />
            {/* <Touchable onPress={loginNav}>
            <Text style={styles.signUpText}>Log In</Text>
          </Touchable> */}
          </View>
          <Image source={smallLogo} style={styles.logo} resizeMode="contain" />
        </View>
        <TextComponent text={'Sign Up'} styles={styles.signUp} />
        <View style={styles.inputParent}>
          <InputComponent
            {...{
              name: 'name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'First Name',
              isImage: username,
              defaultValue: '',
            }}
          />
          <InputComponent
            {...{
              name: 'last',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Last Name',
              isImage: username,
              defaultValue: '',
            }}
          />
          <InputComponent
            {...{
              name: 'email',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Email',
              isImage: emailIcon,
              defaultValue: '',
            }}
          />
          <InputComponent
            {...{
              name: 'password',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'Password*',
              isImage: passwordIcon,
              defaultValue: '',
              isSecure: true,
              inputIconStyle: styles.lockstyle,
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
              isImage: passwordIcon,
              defaultValue: '',
              isSecure: true,
              inputIconStyle: styles.lockstyle,
            }}
          />
          <ThemeButton
            title={'Register'}
            onPress={handleSubmit(signUpButton)}
            style={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default memo(RegisterScreen);
