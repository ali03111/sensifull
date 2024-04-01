import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {arrowBack, chevDown, chevUp, search, stepBg} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import Collapsible from 'react-native-collapsible';
import {AllergiesData, IngredientsData} from '../../Utils/localDB';
import {Colors} from '../../Theme/Variables';

export default function AllergiesList({navigation, route}) {
  const {allergiesList, onSelectValue, selectedValue} = route?.params;

  const [selectedAllergies, setSelectedAllergies] = useState(selectedValue);

  const toggleAllergy = allergy => {
    console.log('selectedAllergies:', selectedAllergies);

    const foundAllergy = selectedAllergies.find(res => res?.id === allergy?.id);

    if (foundAllergy) {
      setSelectedAllergies(
        selectedAllergies.filter(item => item?.id !== allergy?.id),
      );
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View>
        <View style={styles.headerMain}>
          <Touchable onPress={() => navigation.goBack()}>
            <Image source={arrowBack} style={styles.arrBack} />
          </Touchable>
          <TextComponent
            text={'Save'}
            styles={styles.saveText}
            onPress={() => {
              navigation.goBack();
              onSelectValue(selectedAllergies);
            }}
          />
        </View>
        <View style={styles.searchMain}>
          <Image source={search} style={styles.inputImage} />
          <TextInput
            style={styles.inputStyle}
            placeholder={'Search Allergies'}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.btnsMain}
        showsVerticalScrollIndicator={false}>
        {allergiesList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleAllergy(item)}
            style={{
              backgroundColor: selectedAllergies?.filter(
                res => res?.id == item?.id,
              )[0]?.id
                ? Colors.themeGreen
                : 'rgba(255, 255, 255, 0.3)',
              ...styles.allergiesBtns,
            }}>
            <Text
              style={{
                color: selectedAllergies?.filter(res => res?.id == item?.id)[0]
                  ?.id
                  ? 'white'
                  : 'black',
              }}>
              {item?.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
