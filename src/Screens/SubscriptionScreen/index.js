import {View, Text, Image, Platform, ImageBackground} from 'react-native';
import React from 'react';
import useSubscriptionScreen from './useSubscriptionScreen';
import {styles} from './styles';
import {TextComponent} from '../../Components/TextComponent';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import {arrowBack, medalstar, subBg, tickCircle} from '../../Assets';
import ThemeButton from '../../Components/ThemeButton';
import {Touchable} from '../../Components/Touchable';

const Tab = createMaterialTopTabNavigator();

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const SubscriptionScreen = ({navigation, route}) => {
  const {
    startTrial,
    products,
    buySubscription,
    startFreeTrial,
    userData,
    getProductsFromStore,
    dispatch,
    selectedPkg,
    setSelectedPkg,
  } = useSubscriptionScreen(navigation, route);

  const TickCircle = ({text, tintColor, TextColor}) => (
    <View style={styles.tickCircleRow}>
      <Image
        tintColor={tintColor}
        source={tickCircle}
        style={styles.tickCircle}
      />
      <TextComponent
        text={text}
        styles={[
          styles.packText,
          {color: TextColor ? Colors.textGray : Colors.backgroundTheme},
        ]}
      />
    </View>
  );

  const PlanCard = ({plan, isMonthly}) => (
    <View style={styles.container}>
      <View style={styles.upperCont}>
        <View style={styles.midCont}>
          <View style={styles.innerCont}>
            <Image source={medalstar} style={styles.icon} />
            <View style={styles.planTextContainer}>
              <Text style={styles.monthlyText} numberOfLines={2}>
                {plan?.title} /
                <Text style={styles.monthlyTextBold} numberOfLines={2}>
                  {plan?.priceString}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.planFeaturesContainer}>
          <TickCircle
            text={
              'Set up your own rodeo events or cowboy meetups with full control over dates, details, and invites.'
            }
          />
          <TickCircle
            text={
              'Explore upcoming rodeo events pulled from reliable sources and tailored to your location.'
            }
          />
          <TickCircle
            text={
              'Send friend requests, discover people with mutual interests, and build your rodeo network.'
            }
          />
          <TickCircle
            text={
              'Share your rodeo moments with engaging photo, video, or text updates on your timeline.'
            }
          />
          <TickCircle
            text={
              'React to your friends’ stories, show support, and keep the cowboy spirit alive through comments.'
            }
          />
          <TickCircle
            text={
              'Get alerts when friends post, events go live, or new connections are found.'
            }
          />
          <TickCircle
            text={
              'Sync your phone contacts to find friends already using the app or invite them to join the fun.'
            }
          />
          <TickCircle
            text={
              'Track RSVPs, see who’s coming, and manage event updates all in one place.'
            }
          />
          <TickCircle
            text={
              'Your data and privacy are always protected. You’re in control of who sees what.'
            }
          />
        </View>

        <View style={styles.buyCont}>
          <ThemeButton
            onPress={() => buySubscription(plan)}
            title={'Buy Plan'}
            textStyle={styles.buyPlan}
            containerStyle={styles.buyButtonContainer}
            style={styles.buyButton}
          />
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground style={styles.container} source={subBg}>
      <Touchable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={arrowBack}
          resizeMode="contain"
          style={styles.backIcon}
          tintColor={'black'}
        />
      </Touchable>

      <View style={styles.centerContainer}>
        <TextComponent
          text={'Upgrade to Premium'}
          styles={styles.upgradeTitle}
        />

        <TextComponent
          text={'To view all alternate ingredients buy subscription plan'}
          styles={styles.upgradeDesc}
        />

        <View style={styles.priceCard}>
          <View style={styles.priceRow}>
            <TextComponent text={'$24.99/'} styles={styles.priceText} />
            <TextComponent text={'year'} styles={styles.priceYear} />
          </View>

          {[
            'There are many variations of passages',
            'the majority have suffered alteration',
            "don't look even slightly believable",
          ].map((item, index) => (
            <View key={index} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <TextComponent text={item} styles={styles.bulletText} />
            </View>
          ))}

          <ThemeButton
            title={'Buy Premium'}
            style={styles.buyPremiumButton}
            textStyle={styles.buyPremiumText}
          />
        </View>
        <View style={styles.priceCard}>
          <View style={styles.priceRow}>
            <TextComponent text={'$2.99/'} styles={styles.priceText} />
            <TextComponent text={'monthly'} styles={styles.priceYear} />
          </View>

          {[
            'There are many variations of passages',
            'the majority have suffered alteration',
            "don't look even slightly believable",
          ].map((item, index) => (
            <View key={index} style={styles.bulletRow}>
              <Text style={styles.bulletDot}>•</Text>
              <TextComponent text={item} styles={styles.bulletText} />
            </View>
          ))}

          <ThemeButton
            title={'Buy Premium'}
            style={styles.buyPremiumButton}
            textStyle={styles.buyPremiumText}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SubscriptionScreen;
