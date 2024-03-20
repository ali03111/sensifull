import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './styles';
import {allergyDot, allergyRed, tabsBg} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {ingredData} from '../../Utils/localDB';
import useTopRatedInnerScreen from './useTopRatedInnerScreen';
import {AllergiesModal} from './AllergiesModal';

export default function Ingredients() {
  const {toggleModal, modalVisible} = useTopRatedInnerScreen();

  const renderItems = useCallback(({item}) => {
    return (
      <View
        style={
          item?.allergies == 'true'
            ? styles.ingredMainRed
            : styles.ingredMainGreen
        }>
        <View style={styles.allergiesInner}>
          <Image
            source={item?.allergies == 'true' ? allergyRed : allergyDot}
            style={
              item?.allergies == 'true'
                ? styles.allergiesIcon
                : styles.allergiesIconGreen
            }
          />
          <TextComponent
            text={item?.allergiesName}
            styles={styles.ingredTextStyle}
          />
        </View>
        <View>
          {item?.allergies == 'true' && (
            <TextComponent
              text={'View Alternate'}
              styles={styles.popUpTitle}
              onPress={toggleModal}
            />
          )}
        </View>
      </View>
    );
  });
  return (
    <ImageBackground source={tabsBg} style={styles.bgTabs}>
      <FlatList
        data={ingredData}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <AllergiesModal ToggleFunction={toggleModal} isVisible={modalVisible} />
    </ImageBackground>
  );
}
