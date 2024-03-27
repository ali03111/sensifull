import React, {useState} from 'react';
import {
  Modal,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';
import {styles} from './styles';
import {closeIcon} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {Picker} from '@react-native-picker/picker';
import {hp, wp} from '../../Config/responsive';

export const ServingModal = ({isVisible, onClose, title, content}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState();

  const closeModal = () => {
    setModalVisible(false);
    onClose(); // Call the onClose callback provided by the parent component
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Touchable onPress={closeModal} style={styles.closeBtn}>
            <Image source={closeIcon} style={styles.closeIconStyle} />
          </Touchable>
          <TextComponent text={title} styles={styles.modalHd} />
          <TextComponent text={content} styles={styles.modalText} />
          <View style={styles.agePicker}>
            <Picker
              style={{
                width: wp('90'),
                height: hp('6.2'),
                alignItems: 'center',
                alignSelf: 'center',
                verticalAlign: 'middle',
                justifyContent: 'center',
                // fontSize: hp('1'),
                color: 'transparent',
              }}
              itemStyle={{
                fontSize: 40,
              }}
              selectedValue={selectedAge}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedAge(itemValue)
              }>
              <Picker.Item label="Meal per serving" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
              <Picker.Item label="9" value="9" />
            </Picker>

            <TextComponent
              text={selectedAge ? selectedAge : 'Meal per serving'}
              styles={styles.pickerText(selectedAge)}
            />
          </View>
          <View style={styles.serveBtnMain}>
            <ThemeButton
              title={'Not, Now'}
              style={styles.servingBtn}
              BgColor={{backgroundColor: '#eaf1df'}}
              textStyle={styles.btnText}
            />
            <ThemeButton
              title={'Done'}
              style={styles.servingBtn}
              textStyle={styles.btnTextWhite}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
