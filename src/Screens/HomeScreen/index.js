import React, {useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {
  allergiesIcon,
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
  star,
  stepBg,
} from '../../Assets';
import {styles} from './styles';
import useHomeScreen from './useHomeScreen';
import {mealData, popularData, recomData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';

const HomeScreen = ({navigation}) => {
  const {} = useHomeScreen(navigation);

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

  return (
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
          <View style={styles.inputMain}>
            <Image source={search} style={styles.inputImage} />
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor="white"
              placeholder={'Search Allergies'}
            />
            <Touchable style={styles.filterMain}>
              <Image source={filter1} style={styles.filterImage} />
            </Touchable>
          </View>
        </View>
        <View style={styles.homeMain}>
          <View style={styles.ingredArea}>
            <Touchable style={{...styles.ingredBtnGreen, ...styles.ingredBtn}}>
              <View style={styles.ingredTop}>
                <Image source={ingredientIcon} style={styles.ingredIcon} />
                <TextComponent
                  text={'Ingredients'}
                  styles={{...styles.ingredientText, ...styles.textGreen}}
                />
              </View>
              <Image source={greenArrow} style={styles.ingredArrow} />
            </Touchable>
            <Touchable style={{...styles.ingredBtnRed, ...styles.ingredBtn}}>
              <View style={styles.ingredTop}>
                <Image source={allergiesIcon} style={styles.ingredIcon} />
                <TextComponent
                  text={'Allergies'}
                  styles={{...styles.ingredientText, ...styles.textRed}}
                />
              </View>
              <Image source={redArrow} style={styles.ingredArrow} />
            </Touchable>
          </View>
        </View>
        <View style={styles.topRatedMain}>
          <TextComponent text={'Top Rated Meals'} styles={styles.topRated} />
          <Touchable>
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
        <View style={styles.popular}>
          <TextComponent text={'Today’s Popular'} styles={styles.topRated} />
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
          <TextComponent text={'Recommended Meals'} styles={styles.topRated} />
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
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;
