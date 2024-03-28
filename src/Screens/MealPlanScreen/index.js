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
  arrDown,
  arrRightGray,
  editWhite,
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

const MealPlanScreen = ({navigation}) => {
  const {} = useMealPlanScreen(navigation);

  const [listData, setListData] = useState(
    Array(5)
      .fill('')
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(5)
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

  return (
    <>
      <ImageBackground source={stepBg} style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <HeaderWithFilterAndBack
            goBack={() => navigation.goBack()}
            Text={'Meals Plan'}
          />
          {/* <DataNotFound
            title={'No Plans Yet!'}
            subTitle={'Create Meal plans.'}
            btnTitle={'Create Plan'}
            onpress={() => navigation.navigate('CreateMealPlanScreen')}
          /> */}
          {/* <View style={styles.swipelist}> */}
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
          {/* </View> */}
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default memo(MealPlanScreen);
