import {Image, ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {arrowBack, stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import DietaryRestrictions from '../../Components/DietaryRestrictions';
import {Touchable} from '../../Components/Touchable';
import {SettingHeader} from '../../Components/SettingHeader';
import useSettingDietaryScreen from './useSettingDietaryScreen';
import {removeKeyAndReturnArry} from '../../Utils/globalFunctions';

const SettingDietaryScreen = ({navigation}) => {
  const {allData, apiSelectVal, onSave, selectedVal, setSelectedVal} =
    useSettingDietaryScreen(navigation);

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <SettingHeader
        goBack={() => navigation.goBack()}
        extraStyle={styles.headerStyle}
      />
      <DietaryRestrictions
        onpress={() =>
          navigation.navigate('Restrictions', {
            restrictions: allData?.restrictions,
            onSelectValue: res => {
              setSelectedVal(removeKeyAndReturnArry(res));
              setTimeout(() => {
                onSave();
              }, 900);
            },
            selectedValue: apiSelectVal,
          })
        }
        arryViewStyle={{alignSelf: 'center'}}
        selectedValue={selectedVal ?? apiSelectVal}
      />
    </ImageBackground>
  );
};

export default memo(SettingDietaryScreen);
