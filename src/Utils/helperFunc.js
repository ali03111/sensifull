import {create} from 'apisauce';
import {baseURL, fcmToken, getAllUser, notifyUserUrl} from './Urls';
import {store} from '../Redux/Reducer';
import {loadingFalse, loadingTrue} from '../Redux/Action/isloadingAction';
import {Platform} from 'react-native';
import {logOutUser, updateAuth} from '../Redux/Action/AuthAction';
import {types} from '../Redux/types';

const API = create({
  baseURL,
  timeout: 15000,
  //   timeoutErrorMessage: 'Please try Again...',
});

const hideLoaderAPIs = [notifyUserUrl, getAllUser, fcmToken];
// const hideLoaderAPIs = ['/playcount', '/playlist', '/home-content'];

API.addRequestTransform(config => {
  if (!hideLoaderAPIs.includes(config.url)) store.dispatch(loadingTrue());
  const {Auth} = store.getState();
  config.headers = {
    Authorization: `Bearer ${Auth.token}`,
  };
  return config;
});

API.addResponseTransform(response => {
  setTimeout(() => store.dispatch(loadingFalse()), 500);
  const {Auth} = store.getState();
  console.log('token111', Auth.token);
  if (
    response?.originalError?.message == 'Request failed with status code 401' &&
    Auth.token != ''
  )
    store.dispatch({type: types.LogoutType});

  return response;
});

const {get} = API;

//^ altering the get()
API.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  // if (response.ok) {
  return response;
  // }
};

const formDataFunc = (url, body, imageKey, isArray) => {
  const {Auth} = store.getState();
  store.dispatch(loadingTrue());

  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${Auth.token}`);
  myHeaders.append('Content-Type', 'multipart/form-data');

  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (body?.profileData?.type) {
      formData.append(imageKey, {
        uri: body?.profileData.uri,
        type: body?.profileData.type,
        name: body?.profileData.fileName,
      });
    }
    formData.append(key, value);
  });
  console.log('asdasd123', formData);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow',
  };
  let newUrl = baseURL + url;
  console.log(newUrl, 'aasdas');
  return fetch(newUrl, requestOptions)
    .then(res => res.json())
    .then(res => {
      console.log('test', res);
      return {data: res, ok: true};
    })
    .catch(err => {
      console.log('testerr', err);
      return {data: err, ok: false};
    });
};

const fetchGetWithToken = async url => {
  const {Auth} = store.getState('Auth');
  const fullUrl = baseURL + url;
  // console.log(Auth.token, Auth.userData, 'Auth Token', fullUrl);

  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.token}`, // Assuming a Bearer token authentication
        // Add other headers if needed
      },
    });
    if (!response.ok) {
      // const data = await response.json();
      store.dispatch({type: types.LogoutType});
      console.log(
        'kladbkjlsdbvjkbsdkjbksjdbvkbdjkvbsdkjvjksdbvkljsd',
        response,
      );
    }

    // console.log(data, 'alskdjfklajsdfkljadlsfjaklsdjfl2kds444ajf2lkdjs');
    const data = await response.json();
    console.log(
      'sldbvkljsbdkvbsdkjvbsdbvkjsdbkvbsdkbvsdjvbklsdjbvksldbjvlkjsd',
      data,
    );
    store.dispatch({
      type: types.UpdateProfile,
      payload: data,
    });
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    store.dispatch({type: types.LogoutType});
    throw error; // Rethrow the error to handle it at the caller's level if needed
  }
  // store.dispatch({type: types.LogoutType});
};

export {formDataFunc, fetchGetWithToken};

export default API;
