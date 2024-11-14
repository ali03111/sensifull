import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
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
import {MultiSelectButton} from '../../Components/MultiSelectButton';
import {step5} from '../../Utils/localDB';
import {Picker} from '@react-native-picker/picker';

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
    selectedGender,
    setSelectedGender,
    ageRange,
    setAgeRange,
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
              image={profileData?.uri ?? userData?.profile_image}
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
          <View style={{flexDirection: 'row', marginTop: hp('2')}}>
            <MultiSelectButton
              items={step5}
              selectedAlter={
                selectedGender ??
                step5.filter(res => res?.title == userData?.gender)[0]
              }
              objId={'gender'}
              onSelectVal={(id, e) => setSelectedGender(e)}
            />
          </View>
          <View style={styles.agePicker}>
            <Picker
              style={
                Platform.OS == 'ios'
                  ? styles.pickerStyleIO0S
                  : styles.pickerStyle
              }
              itemStyle={{
                fontSize: hp('2'),
              }}
              selectedValue={ageRange ?? userData?.age}
              onValueChange={(itemValue, itemIndex) => setAgeRange(itemValue)}>
              <Picker.Item label="Select your age" value={null} />
              <Picker.Item label="8 - 13" value="8 - 13" />
              <Picker.Item label="13 - 15" value="13 - 15" />
              <Picker.Item label="15 - 18" value="15 - 18" />
              <Picker.Item label="18 - 21" value="18 - 21" />
              <Picker.Item label="21 - 24" value="21 - 24" />
              <Picker.Item label="24 - 27" value="24 - 27" />
            </Picker>
            {Platform.OS == 'android' && (
              <TextComponent
                text={
                  userData?.age ? ageRange ?? userData?.age : 'Select your age'
                }
                styles={styles.pickerText(ageRange ?? userData?.age)}
              />
            )}
          </View>
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
