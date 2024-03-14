import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export default function GoalsAndPurpose({title, data}) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = itemId => {
    setSelectedCategory(itemId);
  };
  return (
    <View>
      <TextComponent text={title} styles={styles.title} />
      <View style={styles.content}>
        {data.map((item, index) => (
          <Pressable
            style={styles.categories(Boolean(selectedCategory == item.id))}
            key={item?.id}
            onPress={() => handleCategoryPress(item.id)}>
            <Image
              source={item?.image}
              style={styles.purposeImage(Boolean(selectedCategory == item.id))}
            />
            <TextComponent
              text={item?.title}
              styles={styles.catTitle(Boolean(selectedCategory == item.id))}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: hp('3.5'),
    fontWeight: '700',
    color: Colors.primaryColor,
    textAlign: 'center',
    marginBottom: hp('3'),
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categories: selectedCategory => ({
    borderWidth: 1,
    borderColor: selectedCategory ? Colors.themeGreen : '#525252',
    borderRadius: 20,
    width: wp('44'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('3'),
    alignItems: 'center',
    marginTop: hp('2'),
    backgroundColor: selectedCategory ? Colors.themeGreen : 'transparent',
  }),
  purposeImage: selectedCategory => ({
    width: wp('17'),
    height: hp('8'),
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: selectedCategory ? 'white' : null,
  }),
  catTitle: selectedCategory => ({
    fontSize: hp('2.6'),
    fontWeight: '700',
    color: selectedCategory ? 'white' : Colors.primaryColor,
    marginTop: hp('2'),
  }),
});
