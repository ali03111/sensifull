import React, {memo} from 'react';
import {ScrollView, ImageBackground, View} from 'react-native';

import {fav, stepBg, topRated} from '../../Assets';
import {styles} from './styles';
import useTopRatedInnerScreen from './useTopRatedInnerScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {MyTabs} from './MyTabs';
import BlurImage from '../../Components/BlurImage';
import {capitalizeFirstLetter} from '../../Utils/globalFunctions';

const TopRatedInnerScreen = ({navigation, route}) => {
  const {toggleModal, modalVisible, allData} = useTopRatedInnerScreen(
    navigation,
    route,
  );

  console.log('jklsdbvklsdblvksbdklvbsklvsdklv', JSON.stringify(allData));
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
          <BlurImage
            uri={allData?.image}
            isURI={true}
            blurStyle={styles.mealImage}>
            <TextComponent
              text={'3 Alergic Ingredients'}
              styles={styles.imageBtn}
            />
          </BlurImage>
          <View style={styles.titleMain}>
            <TextComponent
              numberOfLines={2}
              text={allData?.name}
              styles={styles.title}
            />
            <TextComponent
              text={capitalizeFirstLetter(allData?.category?.name)}
              styles={styles.category}
            />
          </View>
          <TextComponent
            text={allData?.description}
            styles={styles.description}
          />
        </View>
        <MyTabs toggleModal={toggleModal} modalVisible={modalVisible} />
        {/* </ScrollView> */}
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedInnerScreen);
