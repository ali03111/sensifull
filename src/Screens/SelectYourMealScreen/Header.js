import {Image, StyleSheet, TextInput, View} from 'react-native';
import {goBack} from '../Utils';
import {Touchable} from '../../Components/Touchable';
import {TextComponent} from '../../Components/TextComponent';
import {arrowBack, filter1, search} from '../../Assets';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';

export const Header = ({
  onpress,
  backIconStyle,
  textStyle,
  Text,
  filterIcon,
  goBack,
  mainStyle,
  favStyle,
  toggleModal,
}) => {
  return (
    <View style={styles.Main}>
      <View style={{...styles.topRatedMain, ...mainStyle}}>
        <Touchable onPress={goBack}>
          <Image
            source={arrowBack}
            style={{...styles.arrBack, ...backIconStyle}}
          />
        </Touchable>
        <TextComponent text={Text} styles={{...styles.viewAll, ...textStyle}} />
        <Touchable onPress={onpress}>
          <Image source={filterIcon} style={{...styles.arrBack, ...favStyle}} />
        </Touchable>
      </View>

      <View style={styles.inputMain}>
        <Image source={search} style={styles.inputImage} />
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor="white"
          placeholder={'Search meals'}
        />
        <Touchable style={styles.filterMain} onPress={toggleModal}>
          <Image source={filter1} style={styles.filterImage} />
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: wp('4'),
    paddingBottom: hp('2.5'),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topRatedMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingVertical: hp('3'),
    paddingBottom: hp('.5'),
  },
  arrBack: {
    tintColor: Colors.white,
    resizeMode: 'contain',
    width: wp('6'),
    height: hp('3'),
  },
  viewAll: {
    fontSize: hp('2.5'),
    color: Colors.white,
    fontWeight: 600,
  },
  inputMain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: wp('4'),
    width: wp('92'),
    marginTop: hp('2'),
  },
  inputStyle: {
    width: wp('67'),
    color: '#fff',
    height: hp('5'),
  },
  inputImage: {
    width: wp('5'),
    resizeMode: 'contain',
    marginRight: wp('2'),
    tintColor: '#fff',
    height: hp('2.5'),
  },
  filterMain: {
    borderLeftWidth: 1,
    borderLeftColor: '#fff',
    paddingLeft: wp('3'),
  },
  filterImage: {
    width: wp('6'),
    height: hp('3'),
    resizeMode: 'contain',
  },
});
