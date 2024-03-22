import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Keyboard,
} from 'react-native';
import useStepScreen from './useStepScreen';
import {arrowRight, stepBg} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {socialData, step1, step5} from '../../Utils/localDB';
import {styles} from './styles';
import {Picker} from '@react-native-picker/picker';
import {hp, wp} from '../../Config/responsive';
import {SocialBtn} from '../../Components/SocialBtn';
import GoalsAndPurpose from '../../Components/GoalsAndPurpose';
import DietaryRestrictions from '../../Components/DietaryRestrictions';
import Allergies from '../../Components/Allergies';

const StepScreen = ({navigation}) => {
  const {} = useStepScreen(navigation);

  // for modal
  // const [modal1Visible, setModal1Visible] = useState(false);
  // const [modal2Visible, setModal2Visible] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleNextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // -----------buttons ---------
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const renderStepContent = () => {
    // const [selectedCategory, setSelectedCategory] = useState(null);

    // const handleCategoryPress = itemId => {
    //   setSelectedCategory(itemId);
    // };
    // --------step 1 ends-----------
    const [selectedButtons, setSelectedButtons] = useState([]);

    const handlePress = itemId => {
      let newSelectedButtons;
      if (selectedButtons.includes(itemId)) {
        newSelectedButtons = selectedButtons.filter(name => name !== itemId);
      } else {
        newSelectedButtons = [...selectedButtons, itemId];
      }
      setSelectedButtons(newSelectedButtons);
    };

    // -------- step 2 and 3 -------
    // const {selectedItems, handlePress} = MultiSelectButton();
    // const [selectedItems, setSelectedItems] = useState([]);

    // --------step 4 -----------
    const [selectedAge, setSelectedAge] = useState();
    // --------- step 5 ------------
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderPress = itemId => {
      setSelectedGender(itemId);
    };

    const renderItem = useCallback(({item, index}) => {
      console.log(index);
      return (
        <SocialBtn
          icon={item?.image}
          text={item?.title}
          noBorder={index == 5 ? styles.hideBorder : null}
        />
      );
    });

    switch (step) {
      case 1:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.tagline}
            />
            <GoalsAndPurpose title={'Purpose'} data={step1} />
          </View>
        );
      case 2:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.tagline}
            />
            <DietaryRestrictions
              onpress={() => navigation.navigate('Restrictions')}
            />
          </View>
        );
      case 3:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.tagline}
            />
            <Allergies onpress={() => navigation.navigate('AllergiesList')} />
          </View>
        );
      case 4:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.tagline}
            />
            <TextComponent text={'Age Range'} styles={styles.titleStep4} />
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
                <Picker.Item label="Select your age" value="" />
                <Picker.Item label="8 - 13" value="8 - 13" />
                <Picker.Item label="13 - 15" value="13 - 15" />
                <Picker.Item label="15 - 18" value="15 - 18" />
                <Picker.Item label="18 - 21" value="18 - 21" />
                <Picker.Item label="21 - 24" value="21 - 24" />
                <Picker.Item label="24 - 27" value="24 - 27" />
              </Picker>

              <TextComponent
                text={selectedAge ? selectedAge : 'Select your age'}
                styles={styles.pickerText(selectedAge)}
              />
            </View>
          </View>
        );
      case 5:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.tagline}
            />
            <TextComponent text={'Gender'} styles={styles.title} />
            <View style={styles.content}>
              {step5.map((item, index) => (
                <Pressable
                  style={styles.gender(Boolean(selectedGender == item.id))}
                  key={item?.id}
                  onPress={() => handleGenderPress(item.id)}>
                  <Image
                    source={item?.image}
                    style={styles.catImage(Boolean(selectedGender == item.id))}
                  />
                  <TextComponent
                    text={item?.title}
                    styles={styles.genderTitle(
                      Boolean(selectedGender == item.id),
                    )}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        );
      case 6:
        return (
          <View>
            <TextComponent
              text={
                'Complete your profile to establish your personal dietary needs.'
              }
              styles={styles.lastTagline}
            />
            <TextComponent
              text={'Where did you hear about us?'}
              styles={styles.titleLastStep}
            />
            {/* <Pressable onPress={toggleCheck} style={styles.socialMain}>
              <Image source={facebook} style={styles.socialIcon} />
              <View style={styles.socialInner}>
                <TextComponent text={'Facebook'} styles={styles.socialText} />
                <Image
                  source={isChecked ? check : uncheck}
                  style={styles.socialCheck}
                />
              </View>
            </Pressable> */}
            {/* <SocialBtn icon={facebook} />
            <SocialBtn icon={instagram} />
            <SocialBtn icon={twitter} />
            <SocialBtn icon={linkedin} />
            <SocialBtn icon={thread} />
            <SocialBtn icon={other} /> */}
            <FlatList
              data={socialData} // Use the same data for the dots
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dotList}
            />
          </View>
        );
      default:
        return null;
    }
  };

  const renderStepCircles = () => {
    return [1, 2, 3, 4, 5, 6].map(index => (
      <View key={index} style={styles.circleContainer}>
        <View
          style={[styles.circle, index <= step ? styles.activeCircle : null]}>
          <Text style={styles.circleText}>{index}</Text>
        </View>
        {index !== 6 && (
          <View
            style={[
              styles.nonActiveLine,
              index < step ? styles.activeLine : null,
            ]}></View>
        )}
      </View>
    ));
  };

  return (
    <ImageBackground source={stepBg} style={styles.container}>
      <View style={styles.stepCirclesContainer}>{renderStepCircles()}</View>
      <View style={styles.mainContent}>{renderStepContent()}</View>
      {!isKeyboardVisible && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.previousButton]}
            onPress={handlePreviousStep}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.nextButton]}
            onPress={handleNextStep}>
            <Text style={styles.buttonText}>
              {step === 6 ? 'Submit' : 'Next'}
            </Text>
            {step === 6 ? null : (
              <Image source={arrowRight} style={styles.arrRight} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};
export default memo(StepScreen);
