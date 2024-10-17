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
  Platform,
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
import {
  getIdsFromArry,
  removeDuplicates,
  removeKeyAndReturnArry,
} from '../../Utils/globalFunctions';

const StepScreen = ({navigation}) => {
  const {
    onbardData,
    handleNextStep,
    handlePreviousStep,
    onSelectValue,
    onBoardData,
    step,
    dynamicRoute,
    mutate,
  } = useStepScreen(navigation);

  // for modal
  // const [modal1Visible, setModal1Visible] = useState(false);
  // const [modal2Visible, setModal2Visible] = useState(false);

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

  const renderSteps = {
    1: () => {
      return (
        <>
          <TextComponent
            text={
              'Complete your profile to establish your personal dietary needs.'
            }
            styles={styles.tagline}
          />
          <GoalsAndPurpose
            onSelectValue={val => onSelectValue('purpose', val)}
            title={'Purpose'}
            selectedValue={onBoardData?.purpose}
            data={onbardData?.purposes ?? []}
          />
        </>
      );
    },
    2: () => {
      return (
        <View>
          <TextComponent
            text={
              'Complete your profile to establish your personal dietary needs.'
            }
            styles={styles.tagline}
          />
          <DietaryRestrictions
            onpress={() =>
              dynamicRoute('Restrictions', {
                restrictions: onbardData?.ingredients_for_restrictions,
                onSelectValue: res => {
                  onSelectValue(
                    'restrictions',
                    removeDuplicates([
                      ...onBoardData?.restrictions,
                      ...removeKeyAndReturnArry(res),
                    ]),
                  );
                },
                selectedValue: onBoardData?.restrictions,
              })
            }
            removeSelectedVal={res => {
              const afterFilter = onBoardData?.restrictions?.filter(
                item => item?.id != res?.id,
              );
              onSelectValue(
                'restrictions',
                removeKeyAndReturnArry(afterFilter),
              );
            }}
            selectedValue={onBoardData?.restrictions}
          />
        </View>
      );
    },
    3: () => {
      return (
        <View>
          <TextComponent
            text={
              'Complete your profile to establish your personal dietary needs.'
            }
            styles={styles.tagline}
          />
          <Allergies
            onpress={() =>
              dynamicRoute('AllergiesList', {
                allergiesList: onbardData?.ingredients_for_allergies,
                onSelectValue: res => onSelectValue('allergies', res),
                selectedValue: onBoardData?.allergies,
              })
            }
            selectedValue={onBoardData?.allergies}
          />
        </View>
      );
    },
    4: ({ageData: {setSelectedAge, selectedAge}}) => {
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
              style={
                Platform.OS == 'ios'
                  ? styles.pickerStyleIO0S
                  : styles.pickerStyle
              }
              itemStyle={{
                fontSize: hp('2'),
              }}
              selectedValue={onBoardData?.ageRange}
              onValueChange={(itemValue, itemIndex) =>
                onSelectValue('ageRange', itemValue)
              }>
              <Picker.Item label="Select your age" value={null} />
              <Picker.Item label="8 - 13" value="8 - 13" />
              <Picker.Item label="13 - 15" value="13 - 15" />
              <Picker.Item label="15 - 18" value="15 - 18" />
              <Picker.Item label="18 - 21" value="18 - 21" />
              <Picker.Item label="21 - 24" value="21 - 24" />
              <Picker.Item label="24 - 27" value="24 - 27" />
            </Picker>
            {Platform.OS == 'android' && (
              <TextComponent
                text={
                  onBoardData?.ageRange
                    ? onBoardData?.ageRange
                    : 'Select your age'
                }
                styles={styles.pickerText(onBoardData?.ageRange)}
              />
            )}
          </View>
        </View>
      );
    },
    5: ({genderData: {handleGenderPress, selectedGender}}) => {
      return (
        <View>
          <TextComponent
            text={
              'Complete your profile to establish your personal dietary needs.'
            }
            styles={styles.tagline}
          />
          <TextComponent text={'Gender'} styles={styles.titleStep4} />
          <View style={styles.content}>
            {step5.map((item, index) => (
              <Pressable
                style={styles.gender(
                  Boolean(onBoardData?.gender == item.title),
                )}
                key={item?.id}
                onPress={() => onSelectValue('gender', item.title)}>
                <Image
                  source={item?.image}
                  style={styles.catImage(
                    Boolean(onBoardData?.gender == item.title),
                  )}
                />
                <TextComponent
                  text={item?.title}
                  styles={styles.genderTitle(
                    Boolean(onBoardData?.gender == item.title),
                  )}
                />
              </Pressable>
            ))}
          </View>
        </View>
      );
    },
    6: () => {
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
          <FlatList
            data={socialData} // Use the same data for the dots
            renderItem={({item, index}) => {
              return (
                <SocialBtn
                  icon={item?.image}
                  text={item?.title}
                  noBorder={index == 5 ? styles.hideBorder : null}
                  onSelectedVal={res => onSelectValue('hearFrom', res)}
                  selectedVal={onBoardData?.hearFrom}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dotList}
          />
        </View>
      );
    },
  };

  const renderStepContent = () => {
    // --------step 4 -----------
    const [selectedAge, setSelectedAge] = useState();
    // --------- step 5 ------------
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderPress = itemId => {
      setSelectedGender(itemId);
    };
    return renderSteps[step]({
      genderData: {
        handleGenderPress,
        selectedGender,
      },
      ageData: {
        setSelectedAge,
        selectedAge,
      },
    });
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
            disabled={Boolean(step == 1)}
            style={[styles.button, styles.previousButton(Boolean(step == 1))]}
            onPress={handlePreviousStep}>
            <Text
              style={{
                ...styles.buttonText,
                display: Boolean(step == 1) ? 'none' : 'flex',
              }}>
              Previous
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.nextButton]}
            onPress={() => handleNextStep[step]()}>
            <Text style={styles.buttonText}>
              {step == 6 ? 'Submit' : 'Next'}
            </Text>
            {step == 6 ? null : (
              <Image source={arrowRight} style={styles.arrRight} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
};
export default memo(StepScreen);
