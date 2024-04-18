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
import {closeIcon, star} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {filterCat1, filterCat2} from '../../Utils/localDB';
import ThemeButton from '../../Components/ThemeButton';
import {MultiSelectButton} from '../../Components/MultiSelectButton';
import {Touchable} from '../../Components/Touchable';
import {Colors} from '../../Theme/Variables';
import DatePicker from 'react-native-date-picker';

export const FilterModal = ({ToggleFunction, isVisible}) => {
  //   const [modalVisible, setModalVisible] = useState(false);
  //   const {selectedItems, handlePress} = MultiSelectButton();

  const DateTImePickerView = ({open, date, onSelecteDate, onClose}) => {
    return (
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          onClose(false);
          onSelecteDate(date);
        }}
        onCancel={() => {
          onClose(false);
        }}
      />
    );
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          ToggleFunction(!isVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.CloseBtn}>
              <Pressable onPress={ToggleFunction}>
                <Image source={closeIcon} style={styles.closeIcon} />
              </Pressable>
            </View>
            <View
              style={{
                width: wp('15'),
                backgroundColor: Colors.primaryColor,
                height: hp('0.5'),
                alignSelf: 'center',
                marginTop: hp(-'2'),
                borderRadius: 10,
              }}
            />
            <TextComponent text={'Filter'} styles={styles.modalTitle} />
            <TextComponent text={'By Meals'} styles={styles.catName} />
            <View style={styles.btnStepMain}>
              <MultiSelectButton items={filterCat1} />
            </View>
            {/* <TextComponent
              text={'By Dietery Prefrences'}
              styles={styles.catName}
            /> */}
            <TextComponent text={'By Dates'} styles={styles.catName} />
            <View style={styles.dateMainView}>
              <ThemeButton
                title={'24 feb 2024'}
                style={styles.dateView}
                textStyle={{
                  color: 'black',
                  fontSize: hp('1.6'),
                }}
              />
              <TextComponent text={'to'} />
              <ThemeButton
                title={'24 feb 2024'}
                style={styles.dateView}
                textStyle={{
                  color: 'black',
                  fontSize: hp('1.6'),
                }}
              />
            </View>
            <ThemeButton
              title={'Filter'}
              style={{
                marginBottom: hp('5'),
              }}
            />
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
  dateView: {
    width: wp('40'),
    height: hp('4.3'),
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderColor: Colors.themeGreen,
    borderWidth: 1,
  },
  dateMainView: {
    flexDirection: 'row',
    width: wp('90'),
    alignSelf: 'center',
    marginBottom: hp('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
