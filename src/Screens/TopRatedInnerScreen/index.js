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
  createKeyInArryObj,
  filterKeyFromArry,
  getIdsFromArry,
  matchTwoArrays,
} from '../../Utils/globalFunctions';
import {hp, wp} from '../../Config/responsive';
import {ServingModal} from '../SelectYourMealScreen/ServingModal';
import ThemeButton from '../../Components/ThemeButton';
import {errorMessage} from '../../Config/NotificationMessage';

const TopRatedInnerScreen = ({navigation, route}) => {
  const {
    toggleModal,
    modalVisible,
    allData,
    paramsData,
    isFav,
    getAlterInt,
    ingAlt,
    modal1Visible,
    setModal1Visible,
    mealObj,
    onSelectValue,
    serving,
    onSelectVal,
    ingredient,
    paramsFun,
    setDummy,
  } = useTopRatedInnerScreen(navigation, route);

  const isCategory = Boolean(
    allData?.category?.name || paramsData?.category?.name != '',
  );

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <HeaderWithFilterAndBack
          goBack={() => {
            setDummy(0);
            navigation.goBack();
          }}
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
        {paramsData?.isEdit && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ThemeButton
              title={'Select Serving'}
              onPress={() => setModal1Visible(true)}
              style={{
                width: wp('30'),
                height: hp('3.5'),
                marginLeft: wp('3'),
                marginRight: wp('2'),
              }}
              textStyle={{fontSize: hp('1.5')}}
            />
            {serving != null && serving != 'null' && (
              <TextComponent text={serving} />
            )}
          </View>
        )}
        {paramsData?.isEdit && (
          <ThemeButton
            title={'Save'}
            onPress={() => {
              if (serving != null) {
                navigation.goBack();
                paramsFun({
                  meal: {...paramsData, ingredients: ingredient},
                  serving,
                });
              } else errorMessage('Please select serving first');
            }}
            style={styles.saveBtn}
            textStyle={{fontSize: hp('1.5')}}
          />
        )}
        <MyTabs
          toggleModal={toggleModal}
          modalVisible={modalVisible}
          ingredients={
            ingredient ??
            createKeyInArryObj(
              matchTwoArrays(
                allData?.ingredients ?? [],
                allData?.user_allergies ?? [],
              ),
              'alternates',
              null,
            )
          }
          nutritions={allData?.nutritions}
          directions={allData?.directions}
          ingAlt={ingAlt}
          getAlterInt={getAlterInt}
          onSelectAlter={onSelectVal}
          disable={Boolean(!paramsData?.isEdit)}
        />
        <ServingModal
          isVisible={modal1Visible}
          onClose={() => setModal1Visible(false)}
          title="How many servings ?"
          content="Choose the number of servings."
          onSelectVal={val => onSelectValue('serving', val)}
          selectedValue={serving}
          onConfirm={() => {
            if (serving != null) setModal1Visible(false);
            else errorMessage('Please select serving first');
          }}
        />

        {/* </ScrollView> */}
      </ImageBackground>
    </>
  );
};

export default memo(TopRatedInnerScreen);
