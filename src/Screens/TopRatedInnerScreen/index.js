import React, {memo} from 'react';
import {ScrollView, ImageBackground, View} from 'react-native';

import {fav, stepBg, topRated} from '../../Assets';
import {styles} from './styles';
import useTopRatedInnerScreen from './useTopRatedInnerScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {MyTabs} from './MyTabs';

const TopRatedInnerScreen = ({navigation, route}) => {
  const {} = useTopRatedInnerScreen(route);

  const data = route.params;
  // console.log('asdasd', data);

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Top Rated Meals'}
          filterIcon={fav}
          mainStyle={styles.headerBg}
          textStyle={styles.styleColor}
          backIconStyle={styles.backStyle}
          favStyle={styles.backStyle}
        />
        <View style={styles.mealmain}>
          <ImageBackground source={topRated} style={styles.mealImage}>
            <TextComponent
              text={'3 Alergic Ingredients'}
              styles={styles.imageBtn}
            />
          </ImageBackground>
          <View style={styles.titleMain}>
            <TextComponent
              numberOfLines={2}
              text={'Zucchini fritters'}
              styles={styles.title}
            />
            <TextComponent text={'Breakfast'} styles={styles.category} />
          </View>
          <TextComponent
            text={
              'Zucchini fritters are a delicious and easy way to use up your summer squash excess.'
            }
            styles={styles.description}
          />
        </View>
        <MyTabs />
        {/* </ScrollView> */}
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedInnerScreen);
