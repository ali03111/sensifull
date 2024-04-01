const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://virtualrealitycreators.com/sensifull-backend/api/',
      imageURL: 'https://virtualrealitycreators.com/sensifull-backend/',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://virtualrealitycreators.com/sensifull-backend/api/',
      imageURL: 'https://virtualrealitycreators.com/sensifull-backend/',
    };
  }
};

export const {baseURL, imageURL} = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};
export const imageUrl = url => {
  return url ? imageURL + url : '';
  // : 'https://res.cloudinary.com/dd6tdswt5/image/upload/v1684830799/UserImages/mhysa2zj0sbmvnw69b35.jpg';
};

export const registerUrl = '/signup';
export const loginUrl = '/login';
export const logoutUrl = 'logout';
export const getOnBoardDataUrl = '/getOnboardingData';
export const saveOnboardingUrl = '/saveOnboardingData';
export const getPurposeUrl = '/getPurposeOfLoginUser';
export const savePurposeUrl = '/savePurposeOfUser';
export const getRestrictionUrl = '/getDietaryRestrictionIngredients';
export const saveRestrictionUrl = '/saveDietaryRestrictionIngredients';
export const getIngredientsUrl = '/getAllergyIngredientsOfUser';
export const saveIngredientsUrl = '/saveAllergyIngredients';
export const editProfileUrl = 'update-profile';
export const verifyUserUrl = 'verify';
