import React, {memo, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
} from 'react-native';
import useStepScreen from './useStepScreen';
import {arrowRight, search, stepBg} from '../../Assets';
import {TextComponent} from '../../Components/TextComponent';
import {step1, step3btns, step4btns, step5} from '../../Utils/localDB';
import {styles} from './styles';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import MultiSelectButton from '../../Components/MultiSelectButton';

const StepScreen = ({navigation}) => {
  const {} = useStepScreen(navigation);
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

  const renderStepContent = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryPress = itemId => {
      setSelectedCategory(itemId);
    };
    // --------step 1 ends-----------
    // const [selectedButtons, setSelectedButtons] = useState([]);

    // const handlePress = itemId => {
    //   let newSelectedButtons;
    //   if (selectedButtons.includes(itemId)) {
    //     newSelectedButtons = selectedButtons.filter(name => name !== itemId);
    //   } else {
    //     newSelectedButtons = [...selectedButtons, itemId];
    //   }
    //   setSelectedButtons(newSelectedButtons);
    // };

    // -------- step 2 and 3 -------
    const {selectedItems, handlePress} = MultiSelectButton();

    // --------- step 5 ------------
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderPress = itemId => {
      setSelectedGender(itemId);
    };

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
            <TextComponent text={'Purpose'} styles={styles.title} />
            <View style={styles.content}>
              {step1.map((item, index) => (
                <Pressable
                  style={styles.categories(
                    Boolean(selectedCategory == item.id),
                  )}
                  key={item?.id}
                  onPress={() => handleCategoryPress(item.id)}>
                  <Image
                    source={item?.image}
                    style={styles.catImage(
                      Boolean(selectedCategory == item.id),
                    )}
                  />
                  <TextComponent
                    text={item?.title}
                    styles={styles.catTitle(
                      Boolean(selectedCategory == item.id),
                    )}
                  />
                </Pressable>
              ))}
            </View>
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
            <TextComponent
              text={'Dietary Restrictions'}
              styles={styles.titleStepTwo}
            />
            <TextComponent
              text={'(Ingredients)'}
              styles={styles.titleSubText}
            />
            <View style={styles.stepTwoStyle}>
              <View style={styles.inputMain}>
                <Image source={search} style={styles.inputImage} />
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Search Restrictions'}
                />
              </View>
              <View style={styles.btnStepMain}>
                {step3btns.map((item, index) => (
                  <ThemeButton
                    onPress={() => handlePress(item?.id)}
                    title={item.name}
                    style={styles.btnMain}
                    textStyle={styles.btnText}
                    TextColor={{
                      color: selectedItems.includes(item?.id)
                        ? 'white'
                        : '#525252',
                    }}
                    BgColor={{
                      backgroundColor: selectedItems.includes(item?.id)
                        ? '#95BB5B'
                        : 'transparent',
                    }}
                  />
                ))}
              </View>
            </View>
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
            <TextComponent text={'Allergies'} styles={styles.titleStepTwo} />

            <View style={styles.stepTwoStyle}>
              <View style={styles.inputMain}>
                <Image source={search} style={styles.inputImage} />
                <TextInput
                  style={styles.inputStyle}
                  placeholder={'Search Allergies'}
                />
              </View>
              <View style={styles.btnStepMain}>
                {step4btns.map((item, index) => (
                  <ThemeButton
                    onPress={() => handlePress(item?.id)}
                    title={item.name}
                    style={styles.btnMain}
                    textStyle={styles.btnText}
                    TextColor={{
                      color: selectedItems.includes(item?.id)
                        ? 'white'
                        : '#525252',
                    }}
                    BgColor={{
                      backgroundColor: selectedItems.includes(item?.id)
                        ? '#95BB5B'
                        : 'transparent',
                    }}
                  />
                ))}
              </View>
            </View>
          </View>
        );
      case 4:
        return (
          <View>
            <Text>4</Text>
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
    </ImageBackground>
  );
};
export default memo(StepScreen);
