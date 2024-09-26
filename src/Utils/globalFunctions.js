import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {loadingFalse, loadingTrue} from '../Redux/Action/isloadingAction';
import {store} from '../Redux/Reducer';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

const getSingleCharacter = text => {
  let letter = text?.charAt(0).toUpperCase();
  return letter;
};

const removeKeyAndReturnArry = selectedValue => {
  const combinedArray = Object.values(selectedValue).flat();
  return combinedArray;
};

function capitalizeFirstLetter(string) {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}

const getIdsFromArry = (arry, key) => {
  return arry.map(res => res[key]);
};
const filterKeyFromArry = (arry, key) => {
  return arry.filter(res => res[key]);
};

function transformArray(arr, date) {
  const transformedArray = {
    date,
    plans: arr.map(item => ({
      mealid: item.category.meals.id,
      serving: parseInt(item.category.serving), // Assuming serving is a string and needs to be parsed as an integer
      ingredients: item.category.meals.ingredients,
    })),
  };
  return transformedArray;
}

const matchTwoArrays = (matchFrom, matchTheArry) => {
  let matchFromArry = [...matchFrom];
  // Create a Set of nutrition IDs for faster lookup
  let nutritionIds = new Set(matchTheArry.map(matchTheArry => matchTheArry.id));

  // Match nutritions with ingredients
  matchFromArry.forEach(matchFrom => {
    if (nutritionIds.has(matchFrom.id)) {
      matchFrom.match = true;
    } else {
      matchFrom.match = false;
    }
  });
  return matchFromArry;
};

function currentDateformat(selectedDate) {
  // Parse the input date string
  const dateObj = selectedDate ?? new Date();

  // Extract year, month, and day components
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = String(dateObj.getDate() + 1).padStart(2, '0');

  // Format the date in the desired format
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function getDateMonthYear(dateString) {
  const dateParts = dateString.split('-'); // Splitting the date string by '-'
  const year = dateParts[0];
  const monthNumber = parseInt(dateParts[1], 10); // Parsing month number to integer
  const day = dateParts[2];

  // Array of English month names
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Getting English month name using the month number
  const monthName = monthNames[monthNumber - 1];

  return {
    day,
    monthName,
    year,
  };
}

// Function to add "alternate" key to each object
function createKeyInArryObj(data, key, Value) {
  data.forEach(obj => {
    obj[key] = Value;
  });
  return data;
}

// Function to update alternates by ID
function updateKeyById(data, id, newAlternates) {
  let newArry = [...data];
  let obj = newArry.find(obj => obj.id === id);
  if (obj) {
    obj.alternates = newAlternates;
    return newArry;
  } else {
    return newArry;
  }
}

// Function to get object by ID
function getObjectById(id, data) {
  return data.find(obj => obj.id === id);
}

const getDataByBarCode = async barCode => {
  console.log('third');
  store.dispatch(loadingTrue());
  const URL = `https://api.barcodelookup.com/v3/products?barcode=${barCode}&formatted=y&key=qwzviah3h756sc6hgpnusgzx64h6td`;

  // Replace "YOUR_API_KEY" with your actual Google Maps Geocoding API key

  const res = await fetch(URL);
  const response = await res.json();
  if (response?.products?.length > 0) {
    store.dispatch(loadingFalse());
    return {ok: true, data: response?.products};
  } else {
    store.dispatch(loadingFalse());
    return {ok: false, data: []};
  }
};

function extractTimeFromString(str) {
  const timeRegex = /(\d{1,2}:\d{2}\s*[AP]M)/i; // Regular expression to match time in format "hh:mm AM/PM"
  const match = str.match(timeRegex);

  if (match) {
    return match[1]; // Extracting the matched time
  } else {
    return '';
  }
}

// Function to check location permission
const checkCamerPermission = async () => {
  if (Platform.OS === 'ios') {
    const permissionStatus = await check(PERMISSIONS.IOS.CAMERA);
    return permissionStatus === RESULTS.GRANTED;
  } else {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return granted;
  }
};

// Function to request location permission
const requestCameraPermission = async () => {
  if (Platform.OS === 'ios') {
    const permissionStatus = await request(PERMISSIONS.IOS.CAMERA);
    return permissionStatus === RESULTS.GRANTED;
  } else {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
};

const AfterCameraPer = async () => {
  const hasPermission = await checkCamerPermission();
  if (hasPermission) {
    return {ok: true};
  } else {
    const permissionGranted = await requestCameraPermission();
    if (permissionGranted) {
      return {ok: true};
    } else {
      Alert.alert(
        'Permission Denied',
        'Camera permission is required to use this feature',
        [{text: 'OK'}],
      );
      return {ok: false};
    }
  }
};

export {
  getSingleCharacter,
  removeKeyAndReturnArry,
  getIdsFromArry,
  capitalizeFirstLetter,
  transformArray,
  getDateMonthYear,
  matchTwoArrays,
  filterKeyFromArry,
  createKeyInArryObj,
  getObjectById,
  updateKeyById,
  currentDateformat,
  getDataByBarCode,
  AfterCameraPer,
};
