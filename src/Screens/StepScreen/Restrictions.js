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

export default function Restrictions({navigation}) {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(IngredientsData.length).fill(true),
  );
  const [chevActive, setChevActive] = useState('true');

  const [selectedItems, setSelectedItems] = useState({});

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

      const selectedItem = IngredientsData[sectionIndex].content[itemIndex];
      if (newSelectedItems[sectionKey]) {
        if (newSelectedItems[sectionKey].includes(selectedItem)) {
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
    const selectedItem = IngredientsData[sectionIndex].content[itemIndex];
    return (
      selectedItems[sectionKey] &&
      selectedItems[sectionKey].includes(selectedItem)
    );
  };

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <ScrollView>
        <View style={styles.headerMain}>
          <Touchable onPress={() => navigation.goBack()}>
            <Image source={arrowBack} style={styles.arrBack} />
          </Touchable>
          <TextComponent text={'Save'} styles={styles.saveText} />
        </View>
        <View style={styles.searchMain}>
          <Image source={search} style={styles.inputImage} />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Search Ingredients'}
          />
        </View>
        {IngredientsData.map((item, sectionIndex) => (
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
                  {item.content.map((item, itemIndex) => (
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
                        {item}
                      </Text>
                    </Touchable>
                  ))}
                </Collapsible>
              )}
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
