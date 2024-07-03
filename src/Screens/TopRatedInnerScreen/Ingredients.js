import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {styles} from './styles';
import {allergyDot, allergyRed, tabsBg} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {ingredData} from '../../Utils/localDB';
import {AllergiesModal} from './AllergiesModal';
import {getObjectById} from '../../Utils/globalFunctions';
import {hp, wp} from '../../Config/responsive';

export default function Ingredients({
  toggleModal,
  modalVisible,
  ingredients,
  ingAlt,
  getAlterInt,
  onSelectAlter,
  disable,
}) {
  const [id, setId] = useState(0);

  const renderItems = useCallback(({item}) => {
    return (
      <>
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
                onPress={() => {
                  setId(item?.id);
                  getAlterInt(item.id);
                }}
              />
            )}
          </View>
        </View>
        {item?.alternates != null && (
          <View style={{marginLeft: wp('10')}}>
            <TextComponent
              text={`* ${item?.alternates?.title}`}
              styles={{fontSize: hp('1.8')}}
            />
          </View>
        )}
      </>
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
      <AllergiesModal
        ToggleFunction={toggleModal}
        isVisible={modalVisible}
        ingAlt={ingAlt}
        selectedAlter={getObjectById(id, ingredients ?? [])}
        onSelectVal={onSelectAlter}
        objId={id}
        disable={disable}
      />
    </ImageBackground>
  );
}
