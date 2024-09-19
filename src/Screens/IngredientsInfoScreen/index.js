import {View, Text, FlatList} from 'react-native';
import React, {memo, useCallback} from 'react';
import useIngredientsInfoScreen from './useIngredientsInfoScreen';
import {HeaderWithFilterAndBack} from '../../Components/HeaderWithFilterAndBack';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';

const IngredientsInfoScreen = ({navigation, route}) => {
  const {} = useIngredientsInfoScreen(navigation, route);

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
    <View style={{flex: 1}}>
      <HeaderWithFilterAndBack
        Text={'Ingredients Info'}
        goBack={() => navigation.goBack()}
      />
      <View style={{flex: 1, marginHorizontal: wp('2')}}>
        <TextComponent
          text={'Ingredients'}
          styles={{fontWeight: 'bold', fontSize: hp('2.5')}}
        />
        <FlatList
          data={ingredients}
          renderItem={renderItems}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default memo(IngredientsInfoScreen);
