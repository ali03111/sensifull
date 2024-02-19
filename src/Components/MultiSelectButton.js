import React, {useState} from 'react';

// Custom hook for managing selection state
const MultiSelectButton = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handlePress = itemId => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(selectedId => selectedId !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return {selectedItems, handlePress};
};

export default MultiSelectButton;
