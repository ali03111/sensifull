import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import React, {memo} from 'react';
import {search, stepBg} from '../../Assets';
import {styles} from './styles';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {Touchable} from '../../Components/Touchable';
import useSearchBoxScreen from './useSearchBoxScreen';

const SearchBoxScreen = ({navigation}) => {
  const {onSearch, searchText, setSearch} = useSearchBoxScreen(navigation);

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
    </ImageBackground>
  );
};

export default memo(SearchBoxScreen);
