import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {Touchable} from './Touchable';
import {arrRightPurple, closeIcon, info, ingred} from '../Assets';
import useStepScreen from '../Screens/StepScreen/useStepScreen';
import {InfoModal} from '../Screens/StepScreen/InfoModal';

export default function DietaryRestrictions({
  title,
  selectedValue,
  onpress,
  arryViewStyle,
  removeSelectedVal,
}) {
  const [modal1Visible, setModal1Visible] = useState(false);

  console.log('sndklvnslknvlsdnvnsdvnksdvdnv', modal1Visible);

  return (
    <View>
      <View style={styles.infoStyle}>
        <TextComponent
          text={'Dietary Restrictions'}
          styles={styles.titleStepTwo}
        />
        <Touchable
          style={{backgroundColor: 'blue', width: wp('5')}}
          onPress={() => setModal1Visible(true)}>
          <Image source={info} style={styles.infoImg} />
        </Touchable>
      </View>
      <TextComponent text={'(Ingredients)'} styles={styles.titleSubText} />
      <View style={styles.stepTwoStyle}>
        <Touchable style={styles.inputMain} onPress={onpress}>
          <Image source={ingred} style={styles.inputImage} />
          <TextComponent
            text={'Select Ingredients'}
            styles={styles.btnTextTwo}
          />
          <Image source={arrRightPurple} style={styles.arrowImage} />
        </Touchable>
      </View>

      <View style={{...styles.btnsMain, ...arryViewStyle}}>
        {selectedValue?.map((item, index) => (
          <Touchable
            key={index}
            onPress={() => removeSelectedVal(item)}
            style={{
              backgroundColor: Colors.themeGreen,
              ...styles.allergiesBtns,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              {item?.title}
            </Text>
            <Image
              source={closeIcon}
              resizeMode="contain"
              tintColor={'white'}
              style={{width: wp('5')}}
            />
          </Touchable>
        ))}
      </View>
      <InfoModal
        isVisible={modal1Visible}
        onClose={() => setModal1Visible(false)}
        title="Disclaimer"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  infoStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleStepTwo: {
    fontSize: hp('3.5'),
    fontWeight: '700',
    color: Colors.primaryColor,
    textAlign: 'center',
    marginBottom: hp('0'),
  },
  infoImg: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
    marginBottom: hp('-.5'),
    position: 'absolute',
    left: 20,
    top: -8,
  },
  titleSubText: {
    fontSize: hp('2.6'),
    fontWeight: '700',
    color: Colors.primaryColor,
    marginTop: hp('0'),
    textAlign: 'center',
  },
  stepTwoStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnTextTwo: {
    width: wp('66'),
  },
  inputMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#525252',
    borderRadius: 30,
    paddingHorizontal: wp('4'),
    width: wp('92'),
    marginVertical: hp('5'),
  },
  inputImage: {
    width: wp('6'),
    resizeMode: 'contain',
    marginRight: wp('0'),
  },
  arrowImage: {
    width: wp('5'),
    resizeMode: 'contain',
    marginRight: wp('1'),
  },
  btnsMain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp('92'),
  },
  allergiesBtns: {
    height: hp('4'),
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.themeGreen,
    paddingLeft: wp('3'),
    paddingRight: wp('2'),
    marginHorizontal: wp('1'),
    marginVertical: hp('.5'),
  },
});
