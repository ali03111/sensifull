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

export default function AllergiesList({navigation}) {
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const toggleAllergy = allergy => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter(item => item !== allergy));
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
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
            placeholder={'Search Allergies'}
          />
        </View>
        {AllergiesData.map((item, index) => (
          <View key={index} style={styles.btnsMain}>
            {item.content.map((allergy, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => toggleAllergy(allergy)}
                style={{
                  backgroundColor: selectedAllergies.includes(allergy)
                    ? Colors.themeGreen
                    : 'rgba(255, 255, 255, 0.3)',
                  ...styles.allergiesBtns,
                }}>
                <Text
                  style={{
                    color: selectedAllergies.includes(allergy)
                      ? 'white'
                      : 'black',
                  }}>
                  {allergy}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
