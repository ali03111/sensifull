import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {fav, favFilled, favShadow, search, stepBg} from '../../Assets';
import {styles} from './styles';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {Touchable} from '../../Components/Touchable';
import useSearchBoxScreen from './useSearchBoxScreen';
import {MultiSelectButton} from '../../Components/MultiSelectButton';
import {keyExtractor} from '../../Utils';
import {TextComponent} from '../../Components/TextComponent';

const SearchBoxScreen = ({navigation}) => {
  const {onSearch, searchText, setSearch, searchHistory, toggleFav} =
    useSearchBoxScreen(navigation);
  console.log(
    'searchHistorysearchHistorysearchHistorysearchHistorysearchHistory',
    JSON.stringify(searchHistory),
  );

  const searches = useCallback(({item, index}) => {
    return (
      <TextComponent
        text={item}
        styles={styles.searchTextStyle}
        onPress={() => {
          onSearch(item);
        }}
      />
    );
  }, []);
  const lastOpenMeals = useCallback(({item, index}) => {
    return (
      <Touchable
        onPress={() =>
          navigation.navigate('TopRatedInnerScreen', {
            mealData: item,
          })
        }>
        <ImageBackground source={{uri: item?.image}} style={styles.popularMain}>
          <ImageBackground source={favShadow} style={styles.shadow}>
            <View style={styles.titleMain}>
              <View>
                <TextComponent
                  numberOfLines={2}
                  text={item?.name}
                  styles={styles.popularTitle}
                />
                <TextComponent
                  text={item?.category_active?.name}
                  styles={styles.catTitle}
                />
              </View>
              <Touchable
                style={styles.popularBtn}
                onPress={() => toggleFav(item)}>
                <Image
                  source={item?.is_favorite ? favFilled : fav}
                  style={styles.filledIcon}
                />
              </Touchable>
            </View>
          </ImageBackground>
        </ImageBackground>
      </Touchable>
    );
  }, []);

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <HeaderWithFilterAndBack
        goBack={() => {
          navigation.goBack();
        }}
        Text={'Search Meals'}
        mainStyle={styles.headerBg}
        textStyle={styles.styleColor}
        backIconStyle={styles.backStyle}
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="Search meals"
          placeholderTextColor={'gray'}
          style={styles.input}
          value={searchText}
          onChangeText={e => setSearch(e)}
          onEndEditing={onSearch}
        />
        <Touchable style={styles.searchIcon} onPress={onSearch}>
          <Image source={search} style={styles.inputImage} />
        </Touchable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('10')}}>
        <TextComponent text={'Recent Searchs'} styles={styles.heading} />
        <FlatList
          data={searchHistory?.searches}
          keyExtractor={keyExtractor}
          renderItem={searches}
          scrollEnabled={false}
          contentContainerStyle={styles.searchList}
          horizontal
        />
        <TextComponent text={'Recent View'} styles={styles.heading} />
        <FlatList
          data={searchHistory?.lastOpenMeals}
          keyExtractor={keyExtractor}
          renderItem={lastOpenMeals}
          scrollEnabled={false}
          contentContainerStyle={{
            marginTop: hp('2'),
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default memo(SearchBoxScreen);
