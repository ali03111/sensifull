import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextComponent} from './TextComponent';
import {check, facebook, uncheck} from '../Assets';
import {hp, wp} from '../Config/responsive';

export const SocialBtn = ({icon, text, noBorder}) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Pressable onPress={toggleCheck} style={styles.socialMain}>
      <Image source={icon} style={styles.socialIcon} />
      <View style={{...styles.socialInner, ...noBorder}}>
        <TextComponent text={text} styles={styles.socialText} />
        <Image
          source={isChecked ? check : uncheck}
          style={styles.socialCheck}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialMain: {
    flexDirection: 'row',
  },
  socialIcon: {
    width: wp('10'),
    height: hp('5'),
    marginRight: wp('3'),
    marginBottom: hp('4'),
    resizeMode: 'contain',
  },
  socialInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomColor: '#525252',
    borderBottomWidth: 1,
    paddingBottom: hp('2'),
    marginBottom: hp('2'),
  },
  socialCheck: {
    width: wp('7'),
    height: hp('3.5'),
  },
});
