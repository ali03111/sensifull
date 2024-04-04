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
import {AllergiesModal} from './AllergiesModal';

export default function Ingredients({toggleModal, modalVisible, ingredients}) {
  console.log('ksdbvlkbsdlkvbsldbvlsdbkvbsdlkvbsdklbvklsd', modalVisible);

  const renderItems = useCallback(({item}) => {
    return (
      <View
        style={
          item?.match == true ? styles.ingredMainRed : styles.ingredMainGreen
        }>
        <View style={styles.allergiesInner}>
          <Image
            source={item?.match == true ? allergyRed : allergyDot}
            style={
              item?.match == true
                ? styles.allergiesIcon
                : styles.allergiesIconGreen
            }
          />
          <TextComponent text={item?.title} styles={styles.ingredTextStyle} />
        </View>
        <View>
          {item?.match == true && (
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
        data={ingredients}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <AllergiesModal ToggleFunction={toggleModal} isVisible={modalVisible} />
    </ImageBackground>
  );
}
