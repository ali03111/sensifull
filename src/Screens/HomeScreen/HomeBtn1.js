import {View, Image} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {Touchable} from '../../Components/Touchable';
import {arrowRight, ingredientIcon} from '../../Assets';
import {styles} from './styles';

export default function HomeBtn1({text1, text2, onpress}) {
  return (
    <Touchable
      style={{...styles.ingredBtnGreen, ...styles.ingredBtn}}
      onPress={onpress}>
      <Image source={ingredientIcon} style={styles.ingredArrow} />
      <View style={styles.ingredTop}>
        <View>
          <TextComponent
            text={text1}
            styles={{...styles.ingredientText, ...{color: 'white'}}}
          />
          <TextComponent
            text={text2}
            styles={{...styles.ingredientText, ...{color: 'white'}}}
          />
        </View>
        <Image source={arrowRight} style={styles.ingredIcon} />
      </View>
    </Touchable>
  );
}
