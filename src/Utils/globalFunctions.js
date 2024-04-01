const getSingleCharacter = text => {
  let letter = text?.charAt(0).toUpperCase();
  return letter;
};

const removeKeyAndReturnArry = selectedValue => {
  const combinedArray = Object.values(selectedValue).flat();
  return combinedArray;
};

const getIdsFromArry = (arry, key) => {
  return arry.map(res => res[key]);
};

export {getSingleCharacter, removeKeyAndReturnArry, getIdsFromArry};
