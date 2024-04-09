import React, {memo} from 'react';
import {ScrollView, ImageBackground, View} from 'react-native';

import {fav, stepBg, topRated} from '../../Assets';
import {styles} from './styles';
import useTopRatedInnerScreen from './useTopRatedInnerScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {MyTabs} from './MyTabs';
import BlurImage from '../../Components/BlurImage';
import {
  capitalizeFirstLetter,
  filterKeyFromArry,
  getIdsFromArry,
  matchTwoArrays,
} from '../../Utils/globalFunctions';
import {hp, wp} from '../../Config/responsive';

const TopRatedInnerScreen = ({navigation, route}) => {
  const {toggleModal, modalVisible, allData, paramsData, isFav} =
    useTopRatedInnerScreen(navigation, route);

  const isCategory = Boolean(
    allData?.category?.name || paramsData?.category?.name != '',
  );

  console.log('jklsdbvklsdblvksbdklvbsklvsdklv', JSON.stringify(allData));
  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <HeaderWithFilterAndBack
          goBack={() => navigation.goBack()}
          Text={'Meals Details'}
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
            styles={styles.mealImage}>
            <TextComponent
              text={`${
                filterKeyFromArry(
                  matchTwoArrays(
                    allData?.ingredients ?? [],
                    allData?.user_allergies ?? [],
                  ),
                  'match',
                )?.length
              } Alergic Ingredients`}
              styles={styles.imageBtn}
            />
          </BlurImage>
          <View style={styles.titleMain}>
            <TextComponent
              numberOfLines={2}
              text={allData?.name}
              styles={styles.title}
            />
            {isCategory && (
              <TextComponent
                text={capitalizeFirstLetter(
                  allData?.category?.name ?? paramsData?.category?.name,
                )}
                styles={styles.category}
              />
            )}
          </View>
          <TextComponent
            text={allData?.description}
            styles={styles.description}
          />
        </View>
        <MyTabs
          toggleModal={toggleModal}
          modalVisible={modalVisible}
          ingredients={matchTwoArrays(
            allData?.ingredients ?? [],
            allData?.user_allergies ?? [],
          )}
          nutritions={allData?.nutritions}
          directions={allData?.directions}
        />
        {/* </ScrollView> */}
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedInnerScreen);
