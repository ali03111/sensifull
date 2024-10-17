import React, {memo} from 'react';
import {ScrollView, ImageBackground, View} from 'react-native';

import {fav, heartFill, rightArrow, stepBg, topRated} from '../../Assets';
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
import {Colors} from '../../Theme/Variables';
import {Text} from 'react-native-animatable';

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
    onFav,
    userData,
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
          filterIcon={isFav ? heartFill : fav}
          mainStyle={styles.headerBg}
          textStyle={styles.styleColor}
          backIconStyle={styles.backStyle}
          favStyle={styles.backStyle}
          onpress={onFav}
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
            <View>
              <ThemeButton
                title={
                  Boolean(serving != null && serving != 'null')
                    ? allData?.name
                    : 'How many servings ?'
                }
                childComp={
                  Boolean(serving != null && serving != 'null') && (
                    <TextComponent
                      text={`, ${serving} Servings`}
                      styles={{
                        ...styles.btnText,
                        color: 'black',
                        fontWeight: '400',
                      }}
                    />
                  )
                }
                onPress={() => setModal1Visible(true)}
                style={styles.servingButton}
                image={rightArrow}
                textStyle={styles.btnText}
              />
            </View>
          </View>
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
          userData={userData}
          nutritions={allData?.nutritions}
          directions={allData?.directions}
          ingAlt={ingAlt}
          getAlterInt={getAlterInt}
          onSelectAlter={onSelectVal}
          disable={Boolean(!paramsData?.isEdit)}
        />
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
