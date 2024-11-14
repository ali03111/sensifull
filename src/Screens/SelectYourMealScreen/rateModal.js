import React, {useState} from 'react';
import {
  Modal,
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import {styles} from './styles';
import {closeIcon} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import {Picker} from '@react-native-picker/picker';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import {Rating, AirbnbRating} from 'react-native-ratings';

export const RateModal = ({
  isVisible,
  onClose,
  title,
  content,
  onSelectVal,
  selectedValue,
  onConfirm,
  mainViewStyle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(1);

  const closeModal = () => {
    onSelectVal(null);
    onClose(); // Call the onClose callback provided by the parent component
  };

  const IsIOS = Boolean(Platform.OS == 'ios');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={{...styles.modalContent}}>
          <Touchable
            onPress={closeModal}
            style={{...styles.closeBtn, marginBottom: hp('2')}}>
            <Image source={closeIcon} style={styles.closeIconStyle} />
          </Touchable>
          <TextComponent text={title} styles={styles.modalHd} />
          <TextComponent text={content} styles={styles.modalText} />
          <AirbnbRating
            count={5}
            reviews={['Terrible', 'Bad', 'OK', 'Good', 'Very Good']}
            defaultRating={rating}
            size={30}
            onFinishRating={e => setRating(e)}
          />
          <View style={styles.serveBtnMain}>
            <ThemeButton
              title={'Not, Now'}
              style={styles.servingBtn}
              BgColor={{backgroundColor: '#eaf1df'}}
              textStyle={styles.btnText}
              onPress={closeModal}
            />
            <ThemeButton
              title={'Done'}
              style={styles.servingBtn}
              textStyle={styles.btnTextWhite}
              onPress={() => onConfirm(rating)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
