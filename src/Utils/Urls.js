const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://virtualrealitycreators.com/green-boom/api',
      imageURL: 'https://virtualrealitycreators.com/green-boom/public',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://virtualrealitycreators.com/green-boom/api',
      imageURL: 'https://virtualrealitycreators.com/green-boom/public/',
    };
  }
};

export const {baseURL, imageURL} = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};
export const imageUrl = url => {
  console.log(url, 'sdfksdfl;jlsdkj');
  return url ? imageURL + url : '';
  // : 'https://res.cloudinary.com/dd6tdswt5/image/upload/v1684830799/UserImages/mhysa2zj0sbmvnw69b35.jpg';
};

export const registerUrl = '/register';
export const loginUrl = '/login-user';
export const logoutUrl = 'auth/logout';
export const getAgoraTokenUrl = 'getAccessToken/';
