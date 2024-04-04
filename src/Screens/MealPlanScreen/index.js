import React, {memo, useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import {
  addCirlce,
  arrDown,
  arrRightGray,
  editWhite,
  filter1,
  noData,
  stepBg,
  swipe1,
  trashWhite,
} from '../../Assets';
import {styles} from './styles';

import useMealPlanScreen from './useMealPlanScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {DataNotFound} from '../../Components/DataNotFound';
import Collapsible from 'react-native-collapsible';
import {Touchable} from '../../Components/Touchable';
import {SelectableBtn} from '../../Components/SelectableBtn';
import {SwipeListView} from 'react-native-swipe-list-view';
import {dateData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {FilterModal} from './FilterModal';
import {getDateMonthYear} from '../../Utils/globalFunctions';
import BlurImage from '../../Components/BlurImage';

const MealPlanScreen = ({navigation}) => {
  const {
    toggleModal,
    modalVisible,
    planDate,
    activeButton,
    handleButtonClick,
    bottomData,
    onRefresh,
    onDeleteMeal,
  } = useMealPlanScreen(navigation);

  const [listData, setListData] = useState(
    Array(5)
      .fill('')
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(1)
            .fill('')
            .map((_, j) => ({
              key: `${i}.${j}`,
              text: `item #${j}`,
            })),
        ],
      })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const [section] = rowKey.split('.');
    const newData = [...listData];
    const prevIndex = listData[section].data.findIndex(
      item => item.key === rowKey,
    );
    newData[section].data.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.rowFront}
        onPress={() => navigation.navigate('TopRatedInnerScreen', item)}>
        <View style={styles.swipeMain}>
          <BlurImage isURI={true} uri={item?.image} styles={styles.swipeImg} />
          <View style={styles.swipeInner}>
            <TextComponent text={item?.name} styles={styles.swipeTitle} />
            <TextComponent
              text={`Breakfast, ${item?.pivot?.serving} Servings`}
              styles={styles.swipeText}
            />
          </View>
        </View>
      </Pressable>
    );
  };

  const renderHiddenItem = ({item}) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <Image source={editWhite} style={styles.trashIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => onDeleteMeal({date: activeButton, meal_id: item?.id})}>
        <Image source={trashWhite} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderDate = useCallback(({item, index}) => {
    return (
      <Touchable
        style={[
          item == activeButton ? styles.activeDateBtn : null,
          styles.dateBtn,
        ]}
        onPress={() => handleButtonClick(item)}>
        <View style={{...(item == activeButton && styles.activeDateNumber)}}>
          <TextComponent
            text={getDateMonthYear(item)?.day}
            styles={{
              ...styles.dateNumber,
            }}
          />
        </View>
        <TextComponent
          text={getDateMonthYear(item)?.monthName}
          styles={{
            ...styles.dateDay,
            ...(item == activeButton && styles.activeDateDay),
          }}
        />
      </Touchable>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <View showsVerticalScrollIndicator={false} style={styles.scroll}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Meals Plan'}
            filterIcon={filter1}
            onpress={toggleModal}
          />
          {planDate?.length > 0 ? (
            <>
              <View style={styles.datList}>
                <FlatList
                  data={planDate} // Use the same data for the dots
                  renderItem={renderDate}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={{
                    paddingHorizontal: wp('0'),
                    marginTop: hp('2'),
                  }}
                />
              </View>
              <View style={styles.dateMain}>
                <TextComponent text={'Sunday, 25 Feb'} styles={styles.date} />
                <Touchable
                  onPress={() => navigation.navigate('CreateMealPlanScreen')}>
                  <Image source={addCirlce} style={styles.circleStyle} />
                </Touchable>
              </View>
              <SwipeListView
                showsVerticalScrollIndicator={false}
                style={styles.listMain}
                useFlatList
                data={bottomData?.plan_meals}
                sections={bottomData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-75}
                previewRowKey={'0'}
                // previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                onRefresh={onRefresh}
                refreshing={false}
              />
            </>
          ) : (
            <DataNotFound
              btnTitle={'Create Plan'}
              title={'No Plans Yet!'}
              subTitle={'Create Meat plans'}
              onpress={() => navigation.navigate('CreateMealPlanScreen')}
            />
          )}
        </View>

        <FilterModal ToggleFunction={toggleModal} isVisible={modalVisible} />
      </ImageBackground>
    </>
  );
};

export default memo(MealPlanScreen);
