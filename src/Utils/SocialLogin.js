import auth from '@react-native-firebase/auth';

export const PhoneNumberLogin = async phoneNumber => {
  // Handle the button press
  try {
    const {confirm} = await auth().signInWithPhoneNumber(phoneNumber);
    return confirm;
  } catch (error) {
    console.log('eror', error);
  }
};

export const verifyCode = async ({confirm, code}) => {
  try {
    await confirm(code);
  } catch (error) {
    console.log('Invalid code.');
  }
};

export const emailSignUp = async ({email, password}) => {
  console.log('dffs', email, password);
  const data = await auth().createUserWithEmailAndPassword(email, password);
  return data;
};

export const emailLogin = async ({email, password}) => {
  const data = await auth().signInWithEmailAndPassword(email, password);
  return data;
};
