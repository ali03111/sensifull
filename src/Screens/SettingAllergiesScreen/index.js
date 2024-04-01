import {Image, ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {arrowBack, stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import Allergies from '../../Components/Allergies';
import {Touchable} from '../../Components/Touchable';
import {SettingHeader} from '../../Components/SettingHeader';
import useSettingAllergiesScreen from './useSettingAllergiesScreen';
import {removeKeyAndReturnArry} from '../../Utils/globalFunctions';

const SettingAllergiesScreen = ({navigation}) => {
  const {allData, apiSelectVal, onSave, selectedVal, setSelectedVal} =
    useSettingAllergiesScreen(navigation);
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <SettingHeader
        goBack={() => navigation.goBack()}
        extraStyle={styles.headerStyle}
      />
      <Allergies
        onpress={() =>
          navigation.navigate('AllergiesList', {
            allergiesList: allData?.allergies,
            onSelectValue: res => {
              setSelectedVal(res);
              setTimeout(() => {
                onSave();
              }, 900);
            },
            selectedValue: apiSelectVal,
          })
        }
        selectedValue={selectedVal ?? apiSelectVal}
        arryViewStyle={{alignSelf: 'center'}}
      />
    </ImageBackground>
  );
};

export default memo(SettingAllergiesScreen);
