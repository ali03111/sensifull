import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';
import {Touchable} from './Touchable';
import {allergiesPurple, arrRightPurple, info, ingred} from '../Assets';
import useStepScreen from '../Screens/StepScreen/useStepScreen';
import {InfoModal} from '../Screens/StepScreen/InfoModal';

export default function Allergies({
  title,
  selectedValue,
  onpress,
  arryViewStyle,
}) {
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <View>
      <View style={styles.infoStyle}>
        <TextComponent text={'Allergies'} styles={styles.titleStepTwo} />
        <Touchable
          style={{backgroundColor: 'blue', width: wp('5')}}
          onPress={() => setModal2Visible(true)}>
          <Image source={info} style={styles.infoImg} />
        </Touchable>
      </View>

      <View style={styles.stepTwoStyle}>
        <View style={styles.stepTwoStyle}>
          <Touchable style={styles.inputMain} onPress={onpress}>
            <Image source={allergiesPurple} style={styles.inputImage} />
            <TextComponent
              text={'Search Allergies'}
              styles={styles.btnTextTwo}
            />
            <Image source={arrRightPurple} style={styles.arrowImage} />
          </Touchable>
        </View>
      </View>

      <View style={{...styles.btnsMain, ...arryViewStyle}}>
        {selectedValue?.map((item, index) => (
          <View
            key={index}
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
          </View>
        ))}
      </View>

      <InfoModal
        isVisible={modal2Visible}
        onClose={() => setModal2Visible(false)}
        title="Disclaimer"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"
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
    paddingHorizontal: wp('3'),
    marginHorizontal: wp('1'),
    marginVertical: hp('.5'),
  },
});
