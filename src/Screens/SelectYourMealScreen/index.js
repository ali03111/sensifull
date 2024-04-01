import React, {memo, useCallback, useState} from 'react';
import {View, ScrollView, ImageBackground, FlatList, Image} from 'react-native';

import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowBack, filter1, stepBg} from '../../Assets';
import {styles} from './styles';
import {popularData, recommendedData} from '../../Utils/localDB';
import useSelectYourMealScreen from './useSelectYourMealScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {Header} from './Header';
import {keyExtractor} from '../../Utils';
import {hp} from '../../Config/responsive';
import {ServingModal} from './ServingModal';

const SelectYourMealScreen = ({navigation}) => {
  const {} = useSelectYourMealScreen(navigation);
  const [modal1Visible, setModal1Visible] = useState(false);

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.mealItem} onPress={() => setModal1Visible(true)}>
        <Image source={item?.image} style={styles.mealImage} />
        <TextComponent
          numberOfLines={2}
          text={item?.title}
          styles={styles.mealTitle}
        />
      </Touchable>
    );
  });

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <Header goBack={() => navigation.goBack()} Text={'Select Meal Plan'} />
      <View style={styles.popularTop}>
        <FlatList
          data={recommendedData}
          renderItem={renderTodayPopular}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={keyExtractor}
          scrollEnabled
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: hp('50'),
          }}
        />
        <ServingModal
          isVisible={modal1Visible}
          onClose={() => setModal1Visible(false)}
          title="How many servings ?"
          content="Choose the number of servings."
        />
      </View>
    </ImageBackground>
  );
};

export default memo(SelectYourMealScreen);
