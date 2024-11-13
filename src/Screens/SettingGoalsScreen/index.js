import {Image, ImageBackground, Platform, View} from 'react-native';
import React, {memo} from 'react';
import {arrowBack, stepBg} from '../../Assets';
import {styles} from './styles';
import GoalsAndPurpose from '../../Components/GoalsAndPurpose';
import {SettingHeader} from '../../Components/SettingHeader';
import useSettingGoalsScreen from './useSettingGoalsScreen';
import {hp} from '../../Config/responsive';

const SettingGoalsScreen = ({navigation}) => {
  const {allData, selectedVal, setSelectedVal, onSave} =
    useSettingGoalsScreen(navigation);

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View style={styles.goalsMain}>
        <SettingHeader
          save={true}
          goBack={() => navigation.goBack()}
          onpress={onSave}
        />
        <View style={styles.goalComp}>
          <GoalsAndPurpose
            title={'Goals / Purpose'}
            subtitle={
              'Complete your profile to establish your personal dietary needs.'
            }
            flatListStyle={{
              paddingBottom: Platform.OS == 'ios' ? hp('60') : hp('50'),
            }}
            onSelectValue={val => {
              const foundPurpose = selectedVal.find(res => res == val);

              if (foundPurpose) {
                const createNewArry = [...selectedVal].filter(
                  item => item != val,
                );
                setSelectedVal(createNewArry);
              } else {
                setSelectedVal([...selectedVal, val]);

                // setSelectedAllergies([...selectedAllergies, allergy]);
              }
            }}
            selectedValue={[...selectedVal]}
            data={allData?.purposes}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default memo(SettingGoalsScreen);
