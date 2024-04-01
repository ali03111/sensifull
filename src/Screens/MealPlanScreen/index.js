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

const MealPlanScreen = ({navigation}) => {
  const {toggleModal, modalVisible} = useMealPlanScreen(navigation);

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

  const renderItem = data => (
    <TouchableHighlight style={styles.rowFront}>
      <View style={styles.swipeMain}>
        <Image source={swipe1} style={styles.swipeImg} />
        <View style={styles.swipeInner}>
          <TextComponent
            text={'Italian cuisine pasta'}
            styles={styles.swipeTitle}
          />
          <TextComponent
            text={'Breakfast, 2 Servings'}
            styles={styles.swipeText}
          />
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <Image source={editWhite} style={styles.trashIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Image source={trashWhite} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = index => {
    setActiveButton(index);
  };

  const renderDate = useCallback(({item, index}) => {
    return (
      <Touchable
        style={[
          styles.dateBtn,
          index === activeButton ? styles.activeDateBtn : null,
        ]}
        onPress={() => handleButtonClick(index)}>
        <TextComponent
          text={item?.date}
          styles={{
            ...styles.dateNumber,
            ...(index === activeButton && styles.activeDateNumber),
          }}
        />
        <TextComponent
          text={item?.day}
          styles={{
            ...styles.dateDay,
            ...(index === activeButton && styles.activeDateDay),
          }}
        />
      </Touchable>
    );
  });

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Meals Plan'}
            filterIcon={filter1}
            onpress={toggleModal}
          />
          {/* <DataNotFound
            title={'No Plans Yet!'}
            subTitle={'Create Meal plans.'}
            btnTitle={'Create Plan'}
            onpress={() => navigation.navigate('CreateMealPlanScreen')}
          /> */}
          <View style={styles.datList}>
            <FlatList
              data={dateData} // Use the same data for the dots
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
            useSectionList
            sections={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
            previewRowKey={'0'}
            // previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
          />
        </ScrollView>
        <FilterModal ToggleFunction={toggleModal} isVisible={modalVisible} />
      </ImageBackground>
    </>
  );
};

export default memo(MealPlanScreen);
