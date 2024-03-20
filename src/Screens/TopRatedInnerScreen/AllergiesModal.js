import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Button,
} from 'react-native';
import {closeIcon} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {AlternateIngred, filterCat1} from '../../Utils/localDB';
import {MultiSelectButton} from '../../Components/MultiSelectButton';
import {Colors} from '../../Theme/Variables';

export const AllergiesModal = ({ToggleFunction, isVisible}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          ToggleFunction(!isVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.CloseBtn}>
              <Pressable onPress={ToggleFunction}>
                <Image source={closeIcon} style={styles.closeIcon} />
              </Pressable>
            </View>
            <TextComponent
              text={'Alternate Ingredients'}
              styles={styles.modalTitle}
            />
            <View style={styles.btnStepMain}>
              <MultiSelectButton items={AlternateIngred} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    width: '100%',
    height: hp('50'),
    margin: 0,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1.5'),
    paddingBottom: hp('3'),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  CloseBtn: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: hp('0.3'),
  },
  closeIcon: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
  },
  modalTitle: {
    fontSize: hp('2.7'),
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: hp('3'),
  },
  catName: {
    fontSize: hp('2'),
    fontWeight: '600',
    marginTop: hp('3'),
    marginBottom: hp('2'),
  },
  btnStepMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnMain: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(149, 187, 91, .6)',
    backgroundColor: 'transparent',
    height: hp('4.5'),
    width: 'auto',
    paddingHorizontal: wp('4.7'),
    marginRight: wp('2'),
    marginTop: hp('1'),
  },
  btnText: {
    color: 'rgba(32, 32, 32, .5)',
  },
  premiumMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.themeYellow,
    backgroundColor: Colors.themeYellow,
    borderRadius: 30,
    paddingHorizontal: wp('3'),
  },
  starImage: {
    resizeMode: 'contain',
    width: wp('4'),
    marginRight: wp('1.5'),
    position: 'relative',
    bottom: 1,
    tintColor: 'black',
  },
  premiumText: {
    color: Colors.black,
    fontSize: hp('1.6'),
  },
  ingredText: {
    color: Colors.black,
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
  },
  disabledBtns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
