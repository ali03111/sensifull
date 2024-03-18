import React, {useState} from 'react';
import {Modal, View, Image, StyleSheet} from 'react-native';
import {closeIcon} from '../../Assets';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';

export const SettingModal = ({
  isVisible,
  onClose,
  title,
  content,
  icon,
  FirstBtnText,
  FirstBtnOnpress,
  SecondBtnText,
  SecondBtnOnpress,
}) => {
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
          <Image source={icon} style={styles.IconStyle} />
          <TextComponent text={title} styles={styles.modalHd} />
          <TextComponent text={content} styles={styles.modalHd} />
          <ThemeButton
            title={FirstBtnText}
            style={styles.redBtn}
            textStyle={styles.btnText1}
            onPress={FirstBtnOnpress}
          />
          <ThemeButton
            title={SecondBtnText}
            style={styles.lightBtn}
            textStyle={styles.btnText}
            onPress={SecondBtnOnpress}
          />
        </View>
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: wp('90'),
    paddingVertical: hp('2'),
    paddingBottom: hp('5'),
    paddingHorizontal: wp('3'),
    borderRadius: 10,
    marginHorizontal: wp('5'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  modalHd: {
    fontSize: hp('2.5'),
    fontWeight: '700',
    color: Colors.black,
    textAlign: 'center',
  },
  modalText: {
    fontSize: hp('1.8'),
    textAlign: 'center',
    marginHorizontal: wp('2'),
    lineHeight: 19,
  },
  closeBtn: {
    alignItems: 'flex-end',
  },
  closeIconStyle: {
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
    marginBottom: hp('-1'),
  },
  IconStyle: {
    width: wp('13'),
    height: hp('7'),
    alignSelf: 'center',
    marginBottom: hp('1'),
  },
  btnText1: {
    fontWeight: 600,
  },
  btnText: {
    color: Colors.black,
    fontWeight: 600,
  },
  redBtn: {
    backgroundColor: Colors.red,
    marginTop: hp('6'),
  },
  lightBtn: {
    backgroundColor: Colors.lightRed,
    marginTop: hp('2'),
  },
});
