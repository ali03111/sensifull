import React, {memo, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import useStepScreen from './useStepScreen';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {arrowRight, stepBg} from '../../Assets';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {styles} from './styles';

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
    switch (step) {
      case 1:
        return (
          <View>
            <Text>1</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>2</Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text>3</Text>
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
            <Text>5</Text>
          </View>
        );
      case 6:
        return (
          <View>
            <Text>6</Text>
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

      {renderStepContent()}

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
            {step === 3 ? 'Submit' : 'Next'}
          </Text>
          <Image source={arrowRight} style={styles.arrRight} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default memo(StepScreen);
