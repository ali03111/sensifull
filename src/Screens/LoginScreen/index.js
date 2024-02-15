import React, {memo} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  apple,
  email,
  emailIcon,
  facebook,
  google,
  lock,
  loginBg,
  logo,
  mainImage,
  passwordIcon,
  rememberEmpty,
  rememberImg,
  smallLogo,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import useLogin from './useLoginScreen';
import {Touchable} from '../../Components/Touchable';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

const LoginScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    RegisterNav,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
  } = useLogin(navigation);
  return (
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={loginBg} style={styles.bgStyle}>
        <View style={styles.loginTop}>
          <View style={styles.dontHave}>
            <TextComponent
              text={'Sign Up'}
              onPress={RegisterNav}
              styles={styles.signUpText}
            />
          </View>
          <Image source={smallLogo} style={styles.logo} resizeMode="contain" />
        </View>
        <TextComponent text={'Log In'} styles={styles.signUp} />
        <View style={styles.inputParent}>
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
          <ThemeButton
            onPress={handleSubmit(loginUser)}
            title={'Log In'}
            style={styles.logBtn}
          />
          <View style={styles.rememberSec}>
            <Touchable style={styles.rememberInner} onPress={rememberValue}>
              <Image
                source={remember ? rememberEmpty : rememberImg}
                style={styles.tickIcon}
              />
              <Text style={styles.tickText}>Remember me</Text>
            </Touchable>
            <TextComponent
              text={'Forgot Password?'}
              styles={styles.forgetText}
            />
          </View>
        </View>
        <View style={styles.barMain}>
          <View style={styles.barLine}></View>
          <TextComponent text={'Or Sign Up with'} styles={styles.barText} />
          <View style={styles.barLine}></View>
        </View>
        <View style={styles.social}>
          <Touchable style={styles.socialIcons}>
            <Image
              source={google}
              style={styles.socialImage}
              resizeMode="contain"
            />
          </Touchable>
          <Touchable style={styles.socialIcons}>
            <Image
              source={apple}
              style={styles.socialImage}
              resizeMode="contain"
            />
          </Touchable>
          <Touchable style={styles.socialIcons}>
            <Image
              source={facebook}
              style={styles.socialImage}
              resizeMode="contain"
            />
          </Touchable>
        </View>
      </ImageBackground>
    </KeyBoardWrapper>
  );
};
export default memo(LoginScreen);
