import {useState} from 'react';
import ThemeButton from './ThemeButton';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../Config/responsive';
import {Colors} from '../Theme/Variables';

export const MultiSelectButton = ({
  items,
  isDisable,
  selectedAlter,
  onSelectVal,
  objId,
}) => {
  const [dummy, setDummy] = useState(0);

  const handlePress = allergy => {};

  return (
    <>
      {items.map((item, index) => (
        <ThemeButton
          key={index}
          onPress={() => {
            onSelectVal(objId, item.id);
            // setDummy(pre => pre + 1);
          }}
          title={item?.name ?? item?.title}
          style={styles.btnMain(
            // Boolean(
            //   selectedAlter?.alternates?.filter(res => res?.id == item?.id)[0]
            //     ?.id,
            // ),
            Boolean(selectedAlter?.alternates == item.id),
          )}
          textStyle={styles.btnText(
            // Boolean(
            //   selectedAlter?.alternates?.filter(res => res?.id == item?.id)[0]
            //     ?.id,
            // ),
            Boolean(selectedAlter?.alternates == item.id),
          )}
          isDisable={isDisable}
        />
      ))}
    </>
  );
};
export const styles = StyleSheet.create({
  btnMain: isSelected => ({
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.themeGreen,
    height: hp('4.5'),
    width: 'auto',
    paddingHorizontal: wp('4.7'),
    marginRight: wp('2'),
    marginBottom: hp('1'),
    backgroundColor: isSelected ? Colors.themeGreen : 'transparent',
  }),
  btnText: isSelected => ({
    color: isSelected ? 'white' : '#525252',
    fontSize: hp('1.8'),
  }),
});
