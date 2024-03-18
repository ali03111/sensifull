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

const HomeScreen = ({navigation}) => {
  const {toggleModal, modalVisible, setModalVisible} =
    useHomeScreen(navigation);

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
      <ImageBackground source={item?.image} style={styles.popularMain}>
        <TextComponent text={item?.title} styles={styles.popularTitle} />
        <Touchable style={styles.popularBtn}>
          <TextComponent text={'View Recipe'} styles={styles.popularBtnText} />
        </Touchable>
      </ImageBackground>
    );
  });

  const renderRecomMeal = useCallback(({item, index}) => {
    return (
      <View style={styles.recomMain}>
        <Touchable style={styles.recom}>
          <Image source={item?.image} style={styles.recomImage} />
          <TextComponent text={item?.title} styles={styles.recomTitle} />
        </Touchable>
      </View>
    );
  });

  // ------ popup ------
  // const [popUpState, setPopUpState] = useState(false);

  // const bottomSheetModalRef = useRef(null);

  // // variables
  // const snapPoints = useMemo(() => ['25%', '50%'], []);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  //   setPopUpState(true);
  //   console.log('first', popUpState);
  // }, []);

  // const handleSheetChanges = useCallback(index => {
  //   console.log('handleSheetChanges', index);
  //   if (index == -1) {
  //     setPopUpState(false);
  //   }
  // }, []);

  // const handleCloseModal = useCallback(() => {
  //   bottomSheetModalRef.current?.close();
  // }, []);

  // const BackdropComponent = ({onPress}) => {
  //   return (
  //     <View
  //       style={{
  //         flex: 1,
  //         backgroundColor: 'rgba(0,0,0,0.5)',
  //       }}
  //       onTouchEnd={onPress}
  //     />
  //   );
  // };

  // const BottomSheetView = ({children}) => {
  //   return <View style={styles.contentContainer}>{children}</View>;
  // };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={stepBg} style={styles.container}>
          <View style={styles.Header}>
            <View style={styles.topBar}>
              <TextComponent
                text={'Unlock everything now!'}
                styles={styles.unlockHeading}
              />
              <Touchable style={styles.premiumBtn}>
                <Image source={star} style={styles.starImage} />
                <TextComponent
                  text={'GO PREMIUM'}
                  styles={styles.premiumText}
                />
              </Touchable>
            </View>
            <View style={styles.notifyMain}>
              <View style={styles.notifyinner}>
                <TextComponent
                  text={'What do you'}
                  styles={styles.notifyText}
                />
                <TextComponent
                  text={'want to cook today?'}
                  styles={styles.notifyText}
                />
              </View>
              <Touchable style={styles.notifyBtn}>
                <Image source={notify} style={styles.notifyImage} />
              </Touchable>
            </View>
            <View style={styles.inputMain}>
              <Image source={search} style={styles.inputImage} />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor="white"
                placeholder={'Search Allergies'}
              />
              <Touchable style={styles.filterMain} onPress={toggleModal}>
                <Image source={filter1} style={styles.filterImage} />
              </Touchable>
            </View>
          </View>
          <View style={styles.homeMain}>
            <View style={styles.ingredArea}>
              <HomeBtn1 text1={'Ingredient'} text2={'Restrictions'} />
              <HomeBtn2 text1={'Shopping'} text2={'list'} />
            </View>
          </View>
          {/* <View>
            <Touchable style={styles.shoppingBtn}>
              <Image source={shoplist} style={styles.shoppingIcon} />
              <TextComponent
                text={'Shopping list'}
                styles={styles.shoppingText}
              />
              <Image source={arrRightPurple} style={styles.RightPurpleIcon} />
            </Touchable>
          </View> */}
          <View style={styles.topRatedMain}>
            <TextComponent text={'Top Rated Meals'} styles={styles.topRated} />
            <Touchable
              onPress={() => navigation.navigate('TopRatedMealScreen')}>
              <TextComponent text={'View All'} styles={styles.viewAll} />
            </Touchable>
          </View>
          <View>
            <FlatList
              data={mealData} // Use the same data for the dots
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                paddingLeft: wp('2'),
              }}
            />
          </View>
          {/* <View style={styles.popular}>
            <TextComponent text={'Today’s Popular'} styles={styles.topRated} />
          </View> */}
          <View style={styles.topRatedMain}>
            <TextComponent text={'Today’s Popular'} styles={styles.topRated} />

            <TextComponent
              text={'View All'}
              styles={styles.viewAll}
              onPress={() => navigation.navigate('TodayPopularScreen')}
            />
          </View>
          <View style={styles.popularTop}>
            <FlatList
              data={popularData} // Use the same data for the dots
              renderItem={renderTodayPopular}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                paddingLeft: wp('2'),
              }}
            />
          </View>
          <View style={styles.topRatedMain}>
            <TextComponent
              text={'Recommended Meals'}
              styles={styles.topRated}
            />
            <Touchable>
              <TextComponent text={'View All'} styles={styles.viewAll} />
            </Touchable>
          </View>
          <View style={styles.recomMain}>
            <FlatList
              data={recomData} // Use the same data for the dots
              renderItem={renderRecomMeal}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{
                paddingLeft: wp('2'),
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
              <Touchable style={styles.mealPlanBtn}>
                <TextComponent
                  text={'Create Plan'}
                  styles={styles.mealPlanBtnText}
                />
              </Touchable>
            </ImageBackground>
          </View>
          {/* --------filter modal----------- */}
        </ImageBackground>
      </ScrollView>
      {/* <GestureHandlerRootView style={{zIndex: 99999}}>
        <BottomSheetModalProvider>
          <View style={styles.containerNew(popUpState)}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              backdropComponent={BackdropComponent}>
              <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
              </BottomSheetView>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView> */}
      <FilterModal ToggleFunction={toggleModal} isVisible={modalVisible} />
    </>
  );
};

export default memo(HomeScreen);
