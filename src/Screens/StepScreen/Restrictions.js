import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {arrowBack, chevDown, chevUp, search, stepBg} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import Collapsible from 'react-native-collapsible';
import {IngredientsData} from '../../Utils/localDB';
import {hp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {DataNotFound} from '../../Components/DataNotFound';

export default function Restrictions({navigation, route}) {
  const {restrictions, onSelectValue, selectedValue} = route?.params;
  // console.log(
  //   'restrictionsrestrictionsrestrictionsrestrictionsrestrictions',
  //   JSON.stringify(restrictions),
  // );

  const [isCollapsed, setIsCollapsed] = useState(
    Array(restrictions.length).fill(true),
  );
  const [chevActive, setChevActive] = useState('true');

  const [selectedItems, setSelectedItems] = useState(selectedValue);

  const toggleCollapsed = index => {
    setChevActive(!chevActive);
    setIsCollapsed(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const toggleItemSelection = (sectionIndex, itemIndex) => {
    setSelectedItems(prevState => {
      const sectionKey = `section${sectionIndex}`;
      const newSelectedItems = {...prevState};

      const selectedItem =
        restrictions[sectionIndex]?.ingredients_active[itemIndex];
      if (newSelectedItems[sectionKey]) {
        if (
          newSelectedItems[sectionKey].filter(
            res => res?.id == selectedItem?.id,
          )[0]
        ) {
          newSelectedItems[sectionKey] = newSelectedItems[sectionKey].filter(
            item => item !== selectedItem,
          );
        } else {
          newSelectedItems[sectionKey] = [
            ...newSelectedItems[sectionKey],
            selectedItem,
          ];
        }
      } else {
        newSelectedItems[sectionKey] = [selectedItem];
      }

      return newSelectedItems;
    });
  };

  const isItemSelected = (sectionIndex, itemIndex) => {
    const sectionKey = `section${sectionIndex}`;
    const selectedItem =
      restrictions[sectionIndex]?.ingredients_active[itemIndex];
    return (
      selectedItems[sectionKey] &&
      selectedItems[sectionKey].filter(res => res?.id == selectedItem?.id)[0]
    );
  };

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('10')}}>
        <View style={styles.headerMain}>
          <Touchable onPress={() => navigation.goBack()}>
            <Image source={arrowBack} style={styles.arrBack} />
          </Touchable>
          <TextComponent
            onPress={() => {
              navigation.goBack();
              onSelectValue(selectedItems);
            }}
            text={'Save'}
            styles={styles.saveText}
          />
        </View>
        <View style={styles.searchMain}>
          {/* <Image source={search} style={styles.inputImage} />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Search Ingredients'}
            placeholderTextColor={Colors.textGrayColor}
          /> */}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: hp('10')}}>
          {restrictions.map((item, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <Touchable
                onPress={() => toggleCollapsed(sectionIndex)}
                style={styles.titleMain}>
                <TextComponent text={item.title} styles={styles.titleStyle} />
                <Image
                  source={isCollapsed[sectionIndex] ? chevDown : chevUp}
                  style={styles.chev}
                />
                {/* Corrected from section.title to item.title */}
              </Touchable>
              <View style={styles.border}>
                {!isCollapsed[sectionIndex] && (
                  <Collapsible
                    collapsed={isCollapsed[sectionIndex]}
                    style={styles.collapseMain}>
                    {item?.ingredients_active.length > 0 ? (
                      item?.ingredients_active?.map((res, itemIndex) => (
                        <Touchable
                          key={itemIndex}
                          onPress={() =>
                            toggleItemSelection(sectionIndex, itemIndex)
                          }
                          style={[
                            styles.item,
                            isItemSelected(sectionIndex, itemIndex) &&
                              styles.selectedItem,
                          ]}>
                          <Text
                            style={[
                              styles.itemText,
                              isItemSelected(sectionIndex, itemIndex) &&
                                styles.activeItemText,
                            ]}>
                            {res?.title}
                          </Text>
                        </Touchable>
                      ))
                    ) : (
                      <DataNotFound subTitle={''} />
                    )}
                  </Collapsible>
                )}
              </View>
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
