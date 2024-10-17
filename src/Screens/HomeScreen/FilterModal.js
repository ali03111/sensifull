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
  ScrollView,
} from 'react-native';
import useHomeScreen from './useHomeScreen';
import {closeIcon, star} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {TextComponent} from '../../Components/TextComponent';
import {filterCat1, filterCat2} from '../../Utils/localDB';
import ThemeButton from '../../Components/ThemeButton';
import {MultiSelectButton} from '../../Components/MultiSelectButton';
import {Touchable} from '../../Components/Touchable';
import {Colors} from '../../Theme/Variables';
import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {HomeFilterDataUrl} from '../../Utils/Urls';

export const FilterModal = ({
  ToggleFunction,
  isVisible,
  filterData,
  onFilter,
}) => {
  //   const [modalVisible, setModalVisible] = useState(false);
  //   const {selectedItems, handlePress} = MultiSelectButton();

  const [filterState, setFilterState] = useState({
    category: [],
    ingredient: [],
  });

  const {category, ingredient} = filterState;

  const updateState = data => setFilterState(prev => ({...prev, ...data}));
  console.log('lksdbvklsdbklsdbklsdbklsd', filterData);

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
            <TextComponent text={'Filter Search'} styles={styles.modalTitle} />
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <TextComponent text={'By Category'} styles={styles.catName} />
              <View style={styles.btnStepMain}>
                <MultiSelectButton
                  items={filterData?.categories}
                  onSelectVal={(objId, val) =>
                    updateState({[objId]: [...category, val]})
                  }
                  selectedAlter={category}
                  objId={'category'}
                  isMultipule={true}
                />
              </View>
              <TextComponent text={'By Allergies'} styles={styles.catName} />
              <View style={styles.btnStepMain}>
                <MultiSelectButton
                  items={filterData?.user_allergies}
                  onSelectVal={(objId, val) =>
                    updateState({[objId]: [...ingredient, val]})
                  }
                  selectedAlter={ingredient}
                  objId={'ingredient'}
                  isMultipule={true}
                />
              </View>

              {/* <TextComponent text={'By Ingredients'} styles={styles.catName} />
              <View style={styles.premiumMain}>
                <Touchable style={styles.premiumBtn}>
                  <Image source={star} style={styles.starImage} />
                  <TextComponent
                    text={'GO PREMIUM'}
                    styles={styles.premiumText}
                  />
                </Touchable>
                <TextComponent
                  text={'to unlock ingredients'}
                  styles={styles.ingredText}
                />
              </View>
              <View style={styles.disabledBtns}>
                <ThemeButton
                  disabled={true}
                  title={'Oregano leaves'}
                  style={styles.btnMain}
                  textStyle={styles.btnText}
                />
                <ThemeButton
                  disabled={true}
                  title={'Egg, whisked'}
                  style={styles.btnMain}
                  textStyle={styles.btnText}
                />
                <ThemeButton
                  disabled={true}
                  title={'Parsley, chopped'}
                  style={styles.btnMain}
                  textStyle={styles.btnText}
                />
              </View> */}
            </ScrollView>
            <ThemeButton
              title={'Filter'}
              style={{marginTop: hp('2')}}
              onPress={() => {
                onFilter(category, ingredient);
                setTimeout(() => {
                  setFilterState({
                    category: [],
                    ingredient: [],
                  });
                }, 3000);
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
    minHeight: hp('50'),
    maxHeight: hp('90'),
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
    marginBottom: hp('2'),
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
