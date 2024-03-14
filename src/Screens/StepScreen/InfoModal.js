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

export const InfoModal = ({isVisible, onClose, title, content}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
        </View>
      </View>
    </Modal>
  );
};
