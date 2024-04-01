import React, {memo} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  apple,
  editPicBtn,
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
  username,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import useEditProfileScreen from './useEditProfileScreen';
import {hp} from '../../Config/responsive';
import {CircleImage} from '../../Components/CircleImage';
import {imageUrl} from '../../Utils/Urls';

const EditProfileScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    userData,
    uploadFromGalary,
    profileData,
    editFunc,
    RegisterNav,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
    socialLoginFun,
  } = useEditProfileScreen(navigation);
  return (
    <KeyBoardWrapper
      styles={styles.logInMain}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={loginBg} style={styles.bgStyle}>
        <View style={styles.loginTop}>
          <TextComponent
            text={'Edit Profile'}
            isWhite={true}
            styles={styles.heading}
          />
          <View style={styles.whiteCircle}>
            <CircleImage
              image={profileData?.uri ?? imageUrl(userData?.profile_image)}
              styles={styles.profileView}
              uri={true}
            />
            <Touchable style={styles.addIcon} onPress={uploadFromGalary}>
              <Image
                source={editPicBtn}
                resizeMode="contain"
                style={{height: hp('6')}}
              />
            </Touchable>
          </View>
        </View>
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
              defaultValue: userData?.email,
              editable: false,
            }}
          />
          <InputComponent
            {...{
              name: 'first_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'First Name',
              isImage: username,
              defaultValue: userData?.first_name,
            }}
          />
          <InputComponent
            {...{
              name: 'last_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              placeholder: 'First Name',
              isImage: username,
              defaultValue: userData?.last_name,
            }}
          />
          <ThemeButton
            onPress={handleSubmit(editFunc)}
            title={'Save'}
            style={styles.logBtn}
          />
        </View>
      </ImageBackground>
    </KeyBoardWrapper>
  );
};
export default memo(EditProfileScreen);
