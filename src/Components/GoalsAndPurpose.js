import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import BlurImage from './BlurImage';
import {keyExtractor} from '../Utils';

export default function GoalsAndPurpose({
  title,
  subtitle,
  data,
  onSelectValue,
  selectedValue,
  flatListStyle,
}) {
  return (
    <>
      <TextComponent text={title} styles={styles.title} />
      <TextComponent text={subtitle} styles={styles.subTitle} />

      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'space-between',
          paddingBottom: hp('45'),
          ...flatListStyle,
        }}
        nestedScrollEnabled
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Pressable
              style={styles.categories(Boolean(selectedValue == item.id))}
              key={item?.id}
              onPress={() => onSelectValue(item.id)}>
              <BlurImage
                isURI={true}
                uri={item?.image}
                styles={styles.purposeImage(Boolean(selectedValue == item.id))}
              />
              <TextComponent
                text={item?.title}
                styles={styles.catTitle(Boolean(selectedValue == item.id))}
              />
            </Pressable>
          );
        }}
      />
      {/* {data.map((item, index) => (
          <Pressable
            style={styles.categories(Boolean(selectedValue == item.id))}
            key={item?.id}
            onPress={() => onSelectValue(item.id)}>
            <BlurImage
              isURI={true}
              uri={item?.image}
              styles={styles.purposeImage(Boolean(selectedValue == item.id))}
            />
            <TextComponent
              text={item?.title}
              styles={styles.catTitle(Boolean(selectedValue == item.id))}
            />
          </Pressable>
        ))} */}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: hp('3.5'),
    fontWeight: '700',
    color: Colors.primaryColor,
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    paddingHorizontal: wp('4'),
    marginBottom: hp('3'),
    marginTop: hp('1'),
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categories: selectedCategory => ({
    borderWidth: 1,
    borderColor: selectedCategory ? Colors.themeGreen : Colors.textColor,
    borderRadius: 20,
    width: wp('44'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('3'),
    alignItems: 'center',
    marginTop: hp('2'),
    backgroundColor: selectedCategory ? Colors.themeGreen : 'transparent',
    marginHorizontal: wp('1'),
  }),
  purposeImage: selectedCategory => ({
    width: wp('17'),
    height: hp('8'),
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: selectedCategory ? 'white' : null,
  }),
  catTitle: selectedCategory => ({
    fontSize: hp('2'),
    fontWeight: '700',
    color: selectedCategory ? 'white' : Colors.primaryColor,
    marginTop: hp('2'),
    textAlign: 'center',
  }),
});
