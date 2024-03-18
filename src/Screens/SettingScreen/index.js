import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {
  arrLeft,
  logOut,
  logoutGreen,
  passGreen,
  profile,
  stepBg,
  trash,
  trashRed,
} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {CircleImage} from '../../Components/CircleImage';
import {BlurImage} from '../../Components/BlurImage';
import {Touchable} from '../../Components/Touchable';
import {profileData, settingData} from '../../Utils/localDB';
import {IconBtn} from './IconBtn';
import {SettingModal} from './SettingModal';

const SettingScreen = ({navigation}) => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const renderItem = useCallback(({item, index, data}) => {
    return (
      <Touchable
        onPress={() => item?.onpress(navigation.navigate, item?.screenName)}
        style={styles.listBtn}>
        <Image source={item?.icon} style={styles.iconGreen} />
        <View
          style={[
            styles.listInner,
            index === data.length - 1 && styles.lastItem,
          ]}>
          <TextComponent text={item?.name} styles={styles.title} />
          <Image source={arrLeft} style={styles.arrowRight} />
        </View>
      </Touchable>
    );
  });

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TextComponent text={'Settings'} styles={styles.topHd} />
        </View>
        <CircleImage />
        <BlurImage
          blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
          radius={75}
          // isURI={true}
          styles={styles.ProfileImage}
          blurStyle={styles.blurMain}
          uri={profile}
        />
        <TextComponent text={'John Doe'} styles={styles.name} />
        <TextComponent text={'john@sensifull.com'} styles={styles.email} />
        <View style={styles.mainBtn}>
          <FlatList
            data={settingData}
            renderItem={props => renderItem({...props, data: settingData})}
          />
        </View>
        <View style={styles.mainBtn}>
          <IconBtn
            icon={passGreen}
            btnText={'Change Password'}
            changeText={'Change'}
            onpress={() => navigation.navigate('ChangePasswordScreen')}
          />
          <FlatList
            data={profileData}
            renderItem={props => renderItem({...props, data: profileData})}
          />
        </View>
        <View style={{...styles.mainBtn, ...styles.bottomSpace}}>
          <IconBtn
            icon={logoutGreen}
            btnText={'Log Out'}
            onpress={() => setModal1Visible(true)}
          />
          <IconBtn
            icon={trash}
            btnText={'Deactivate Account'}
            extraStyle={styles.lastItem}
            onpress={() => setModal2Visible(true)}
          />
        </View>
        <SettingModal
          icon={logOut}
          isVisible={modal1Visible}
          onClose={() => setModal1Visible(false)}
          title="Oh no! you are leaving..."
          content="Are you sure ?"
          FirstBtnText={'No! Not this time'}
          SecondBtnText={'Yes! log me out'}
        />
        <SettingModal
          icon={trashRed}
          isVisible={modal2Visible}
          onClose={() => setModal2Visible(false)}
          title="Oh no! you are leaving..."
          content="Are you sure ?"
          FirstBtnText={'Don’t Deactivate'}
          SecondBtnText={'Deactivate Account'}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default memo(SettingScreen);
