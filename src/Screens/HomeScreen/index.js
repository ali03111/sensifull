import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
  Button,
  RefreshControl,
} from 'react-native';
// import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {
  allergiesIcon,
  arrRightPurple,
  arrowRight,
  filter,
  filter1,
  greenArrow,
  ingredientIcon,
  meal1,
  mealPlan,
  notify,
  popular,
  recomMeal1,
  redArrow,
  search,
  shoplist,
  star,
  stepBg,
} from '../../Assets';
import {styles} from './styles';
import useHomeScreen from './useHomeScreen';
import {mealData, popularData, recomData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {FilterPopUp} from './FilterPopUp';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {FilterModal} from './FilterModal';
import HomeBtn from './HomeBtn1';
import HomeBtn1 from './HomeBtn1';
import HomeBtn2 from './HomeBtn2';
import BlurImage from '../../Components/BlurImage';

const HomeScreen = ({navigation}) => {
  const {
    toggleModal,
    modalVisible,
    setModalVisible,
    allData,
    dynamicNav,
    onRefresh,
    refresh,
    onFilter,
    filterData,
  } = useHomeScreen(navigation);

  // console.log('aa', JSON.stringify(allData));

  // const homeData = JSON.stringify(allData);

  console.log('aaasd', allData?.recommended);

  const renderItem = useCallback(({item, index}) => {
    console.log(index);
    return (
      <Touchable style={styles.mealItem}>
        <Image source={item?.image} style={styles.mealImage} />
        <TextComponent text={item?.title} styles={styles.mealTitle} />
      </Touchable>
    );
  });

  const renderTodayPopular = useCallback(({item, index}) => {
    return (
      <View style={styles.popularMainView}>
        <BlurImage isURI={true} uri={item?.image} styles={styles.popularMain}>
          <View style={styles.popularMainInner}>
            <TextComponent text={item?.name} styles={styles.popularTitle} />
            <Touchable
              style={styles.popularBtn}
              onPress={() =>
                dynamicNav('TopRatedInnerScreen', {
                  mealData: item,
                })
              }>
              <TextComponent
                text={'View Recipe'}
                styles={styles.popularBtnText}
              />
            </Touchable>
          </View>
        </BlurImage>
      </View>
    );
  });

  const renderRecomMeal = useCallback(({item, index}) => {
    return (
      <View style={styles.recomMain}>
        <Touchable
          style={styles.recom}
          onPress={() =>
            dynamicNav('TopRatedInnerScreen', {
              mealData: item,
            })
          }>
          {/* <Image source={uri()} style={styles.recomImage} /> */}
          <View style={styles.imageView}>
            <BlurImage
              isURI={true}
              uri={item?.image}
              styles={styles.recomImage}
            />
          </View>
          <TextComponent text={item?.name} styles={styles.recomTitle} />
        </Touchable>
      </View>
    );
  });

  return (
    <>
      <View style={styles.Header}>
        <View style={styles.topBar}>
          <TextComponent
            text={'Unlock everything now!'}
            styles={styles.unlockHeading}
          />
          <Touchable style={styles.premiumBtn}>
            <Image source={star} style={styles.starImage} />
            <TextComponent text={'GO PREMIUM'} styles={styles.premiumText} />
          </Touchable>
        </View>
        <View style={styles.notifyMain}>
          <View style={styles.notifyinner}>
            <TextComponent text={'What do you'} styles={styles.notifyText} />
            <TextComponent
              text={'want to cook today?'}
              styles={styles.notifyText}
            />
          </View>
          <Touchable style={styles.notifyBtn}>
            <Image source={notify} style={styles.notifyImage} />
          </Touchable>
        </View>
        <Touchable
          onPress={() => dynamicNav('SearchBoxScreen')}
          style={styles.inputMain}>
          <Image source={search} style={styles.inputImage} />
          <View
            style={styles.inputStyle}
            placeholderTextColor="white"
            placeholder={'Search Meals'}
            editable={false}>
            <TextComponent
              text={'Search Meals'}
              isWhite={true}
              styles={{fontSize: hp('1.5')}}
            />
          </View>
          <Touchable style={styles.filterMain} onPress={toggleModal}>
            <Image source={filter1} style={styles.filterImage} />
          </Touchable>
        </Touchable>
      </View>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }>
          <View style={styles.homeMain}>
            <View style={styles.ingredArea}>
              <HomeBtn1
                text1={'Ingredient'}
                text2={'Restrictions'}
                onpress={() => dynamicNav('SettingDietaryScreen')}
              />
              <HomeBtn2
                text1={'Shopping'}
                text2={'list'}
                onpress={() => dynamicNav('ShoppingListScreen')}
              />
            </View>
          </View>

          <View style={styles.topRatedMain}>
            <TextComponent text={'Top Rated Meals'} styles={styles.topRated} />
            <TextComponent
              text={'View All'}
              styles={styles.viewAll}
              onPress={() => dynamicNav('TopRatedMealScreen')}
            />
          </View>
          <View>
            <FlatList
              data={mealData} // Use the same data for the dots
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                paddingLeft: wp('2'),
                paddingRight: wp('2'),
              }}
            />
          </View>

          <View style={styles.topRatedMain}>
            <TextComponent text={'Today’s Popular'} styles={styles.topRated} />

            <TextComponent
              text={'View All'}
              styles={styles.viewAll}
              onPress={() => dynamicNav('TodayPopularScreen')}
            />
          </View>
          <View style={styles.popularTop}>
            <FlatList
              data={allData?.popular} // Use the same data for the dots
              renderItem={renderTodayPopular}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                paddingLeft: wp('2'),
                paddingRight: wp('2'),
              }}
            />
          </View>
          <View style={styles.topRatedMain}>
            <TextComponent
              text={'Recommended Meals'}
              styles={styles.topRated}
            />

            <TextComponent
              text={'View All'}
              styles={styles.viewAll}
              onPress={() => dynamicNav('RecommendedMealScreen')}
            />
          </View>
          <View style={styles.recomMain}>
            <FlatList
              data={allData?.recommended}
              renderItem={renderRecomMeal}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                paddingLeft: wp('2'),
                paddingRight: wp('2'),
              }}
            />
          </View>
          <View>
            <ImageBackground source={mealPlan} style={styles.MealPlan}>
              <TextComponent
                text={'Create Meal Plan'}
                styles={styles.MealPlanTitle}
              />
              <TextComponent
                text={'Create your Meal Plan once here...'}
                styles={styles.mealPlanPara}
              />
              <TextComponent
                onPress={() => dynamicNav('MealPlanScreen')}
                text={'Create Plan'}
                styles={styles.mealPlanBtnText}
              />
            </ImageBackground>
          </View>
          {/* --------filter modal----------- */}
        </ScrollView>
      </ImageBackground>

      <FilterModal
        ToggleFunction={toggleModal}
        isVisible={modalVisible}
        filterData={filterData}
        onFilter={onFilter}
      />
    </>
  );
};

export default memo(HomeScreen);
