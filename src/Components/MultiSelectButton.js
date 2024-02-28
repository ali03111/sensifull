import {useState} from 'react';
import ThemeButton from './ThemeButton';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const MultiSelectButton = ({items}) => {
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

  return (
    <>
      {items.map((item, index) => (
        <ThemeButton
          key={index}
          onPress={() => handlePress(item.id)}
          title={item.name}
          style={styles.btnMain}
          textStyle={styles.btnText}
          TextColor={{
            color: selectedItems.includes(item.id) ? 'white' : '#525252',
          }}
          BgColor={{
            backgroundColor: selectedItems.includes(item.id)
              ? '#95BB5B'
              : 'transparent',
          }}
        />
      ))}
    </>
  );
};
export const styles = StyleSheet.create({
  btnMain: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.themeGreen,
    height: hp('4.5'),
    width: 'auto',
    paddingHorizontal: wp('4.7'),
    marginRight: wp('2'),
    marginBottom: hp('1'),
  },
  btnText: {
    color: '#525252',
    fontSize: hp('1.8'),
  },
});
