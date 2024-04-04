import React, {memo} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';

import {
  username,
  emailIcon,
  passwordIcon,
  smallLogo,
  loginBg,
  google,
  apple,
  facebook,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';

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
    <KeyBoardWrapper
      styles={styles.logInMain}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={loginBg} style={styles.bgStyle}>
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
            <Image
              source={smallLogo}
              style={styles.logo}
              resizeMode="contain"
            />
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
                defaultValue: __DEV__ ? 'user' : '',
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
                defaultValue: __DEV__ ? 'user' : '',
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
                placeholder: 'Password',
                isImage: passwordIcon,
                defaultValue: '',
                isSecure: true,
                inputIconStyle: styles.lockstyle,
                defaultValue: __DEV__ ? 'Test@123' : '',
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
                placeholder: 'Confirm Password',
                isImage: passwordIcon,
                defaultValue: '',
                isSecure: true,
                inputIconStyle: styles.lockstyle,
                defaultValue: __DEV__ ? 'Test@123' : '',
              }}
            />
            <ThemeButton
              title={'Sign Up'}
              onPress={handleSubmit(signUpButton)}
              style={styles.buttonStyle}
            />
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
        </ScrollView>
      </ImageBackground>
    </KeyBoardWrapper>
  );
};
export default memo(RegisterScreen);
