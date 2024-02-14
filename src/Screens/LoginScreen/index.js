import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  emailIcon,
  lock,
  logo,
  mainImage,
  passwordIcon,
  rememberEmpty,
  rememberImg,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import useLogin from './useLoginScreen';
import {Touchable} from '../../Components/Touchable';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    onPress,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
  } = useLogin(navigation);
  return (
    <ScrollView style={styles.logInMain}>
      <View style={styles.loginTop}>
        <Image
          source={mainImage}
          style={styles.mainImage}
          resizeMode="contain"
        />
        <TextComponent text={'Sign in to'} styles={styles.signInText} />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.loginBottom}>
        <InputComponent
          {...{
            name: 'email',
            handleSubmit,
            errors,
            reset,
            control,
            getValues,
            placeholder: 'Email*',
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
            isImage: lock,
            defaultValue: '',
            isSecure: true,
            isImage: passwordIcon,
            inputIconStyle: styles.lockstyle,
          }}
        />
        <View style={styles.rememberSec}>
          <Touchable style={styles.rememberInner} onPress={rememberValue}>
            <Image
              source={remember ? rememberEmpty : rememberImg}
              style={styles.tickIcon}
            />
            <Text style={styles.tickText}>Remember me</Text>
          </Touchable>
          <TextComponent text={'Forgot Password?'} styles={styles.forgetText} />
        </View>
        <ThemeButton onPress={handleSubmit(loginUser)} title={'Log In'} />
        <View style={styles.dontHave}>
          <TextComponent
            text={'Don’t have an account?'}
            styles={styles.dontHaveText}
          />
          <Touchable onPress={onPress}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Touchable>
        </View>
      </View>
    </ScrollView>
  );
};
export default memo(LoginScreen);
