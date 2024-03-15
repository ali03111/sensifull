import {View, Image} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrRightPurple, shoplist} from '../../Assets';
import {styles} from './styles';

export default function HomeBtn2({text1, text2, onpress}) {
  return (
    <Touchable
      style={{...styles.ingredBtnRed, ...styles.ingredBtn}}
      onPress={onpress}>
      <Image source={shoplist} style={styles.ingredArrow} />
      <View style={styles.ingredTop}>
        <View>
          <TextComponent text={text1} styles={styles.ingredientText} />
          <TextComponent text={text2} styles={styles.ingredientText} />
        </View>
        <Image source={arrRightPurple} style={styles.ingredIcon} />
      </View>
    </Touchable>
  );
}
