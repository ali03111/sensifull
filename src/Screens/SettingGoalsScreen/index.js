import {Image, ImageBackground, View} from 'react-native';
import React, {memo} from 'react';
import {arrowBack, stepBg} from '../../Assets';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import GoalsAndPurpose from '../../Components/GoalsAndPurpose';
import {step1} from '../../Utils/localDB';
import {Touchable} from '../../Components/Touchable';
import {SettingHeader} from '../../Components/SettingHeader';

const SettingGoalsScreen = ({navigation}) => {
  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View style={styles.goalsMain}>
        <SettingHeader save={true} goBack={() => navigation.goBack()} />
        <View style={styles.goalComp}>
          <GoalsAndPurpose
            title={'Goals / Purpose'}
            subtitle={
              'Complete your profile to establish your personal dietary needs.'
            }
            data={step1}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default memo(SettingGoalsScreen);
