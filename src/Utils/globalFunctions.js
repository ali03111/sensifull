const getSingleCharacter = text => {
  let letter = text?.charAt(0).toUpperCase();
  return letter;
};

const removeKeyAndReturnArry = selectedValue => {
  const combinedArray = Object.values(selectedValue).flat();
  return combinedArray;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

export {
  getSingleCharacter,
  removeKeyAndReturnArry,
  getIdsFromArry,
  capitalizeFirstLetter,
  transformArray,
  getDateMonthYear,
  matchTwoArrays,
  filterKeyFromArry,
};
