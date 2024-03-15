// import {splashTwo} from '../Assets';
import {Linking} from 'react-native';
import {
  AllergiesGreen,
  DietaryGreen,
  eatHealthy,
  facebook,
  female,
  gainWeight,
  goalGreen,
  informationGreen,
  instagram,
  linkedin,
  loseWeight,
  maintainHealth,
  male,
  meal1,
  meal2,
  other,
  others,
  policyGreen,
  popular,
  recomMeal1,
  recomMeal2,
  recomMeal3,
  splashOne,
  starGreen,
  termsGreen,
  thread,
  twitter,
} from '../Assets';

export const onBoardingData = [
  {
    id: 0,
    heading: 'Culinary',
    subHeading: 'Creations Await',
    description:
      'Discover, cook, and savor delicious moments with the Sensifull.',
    image: splashOne,
  },
  {
    id: 1,
    heading: 'Epicurean',
    subHeading: 'Adventures Begin',
    description:
      'Unleash your inner chef with a diverse array of delightful recipes at your fingertips.',
    image: splashOne,
  },
  {
    id: 2,
    heading: 'Savor the',
    subHeading: 'Art of Cooking',
    description:
      'ransform your kitchen into a culinary canvas with our delectable recipe collection.',
    image: splashOne,
  },
];

export const step1 = [
  {
    id: 1,
    image: loseWeight,
    title: 'Lose Weight',
  },
  {
    id: 2,
    image: gainWeight,
    title: 'Gain Weight',
  },
  {
    id: 3,
    image: eatHealthy,
    title: 'Eat Healthy',
  },
  {
    id: 4,
    image: maintainHealth,
    title: 'Maintain Health',
  },
];
export const step3btns = [
  {
    id: 1,
    name: 'Gluten',
  },
  {
    id: 2,
    name: 'Dairy',
  },
  {
    id: 3,
    name: 'Peanut',
  },
  {
    id: 4,
    name: 'Fish',
  },
  {
    id: 5,
    name: 'Sory ',
  },
  {
    id: 6,
    name: 'Egg',
  },
  {
    id: 7,
    name: 'Gluten',
  },
  {
    id: 8,
    name: 'Dairy',
  },
];

export const step4btns = [
  {
    id: 1,
    name: 'Sesame',
  },
  {
    id: 2,
    name: 'Soy',
  },
  {
    id: 3,
    name: 'Cow’s milk',
  },
  {
    id: 4,
    name: 'yogurt',
  },
  {
    id: 5,
    name: 'cheese ',
  },
  {
    id: 6,
    name: 'milk powder',
  },
  {
    id: 7,
    name: 'Gluten',
  },
  {
    id: 8,
    name: 'ice cream',
  },
  {
    id: 8,
    name: 'margarine',
  },
];
export const step5 = [
  {
    id: 1,
    image: male,
    title: 'Male',
  },
  {
    id: 2,
    image: female,
    title: 'Female',
  },
  {
    id: 3,
    image: others,
    title: 'Other',
  },
];

export const socialData = [
  {
    id: 1,
    image: facebook,
    title: 'Facebook',
  },
  {
    id: 2,
    image: instagram,
    title: 'Instagram',
  },
  {
    id: 3,
    image: twitter,
    title: 'Twitter',
  },
  {
    id: 4,
    image: linkedin,
    title: 'Linkedin',
  },
  {
    id: 5,
    image: thread,
    title: 'Thread',
  },
  {
    id: 6,
    image: other,
    title: 'Other',
  },
];

export const mealData = [
  {
    id: 1,
    image: meal1,
    title: 'Italian cuisine pasta',
  },
  {
    id: 2,
    image: meal2,
    title: 'Fried Rice, Vegetarian',
  },
  {
    id: 3,
    image: meal1,
    title: 'Italian cuisine pasta',
  },
  {
    id: 4,
    image: meal2,
    title: 'Fried Rice, Vegetarian',
  },
];

export const popularData = [
  {
    id: 1,
    image: popular,
    title: 'Vietnamese Style Warm Salad',
  },
  {
    id: 2,
    image: popular,
    title: 'Vietnamese Style Warm Salad',
  },
  {
    id: 3,
    image: popular,
    title: 'Vietnamese Style Warm Salad',
  },
  {
    id: 4,
    image: popular,
    title: 'Vietnamese Style Warm Salad',
  },
];

export const recomData = [
  {
    id: 1,
    image: recomMeal1,
    title: 'Vegan Cake',
  },
  {
    id: 2,
    image: recomMeal2,
    title: 'Butter Herb',
  },
  {
    id: 3,
    image: recomMeal3,
    title: 'Filipino Barbe',
  },
  {
    id: 4,
    image: recomMeal1,
    title: 'Vegan Cake',
  },
];

export const filterCat1 = [
  {
    id: 1,
    name: 'Breakfast',
  },
  {
    id: 2,
    name: 'Lunch',
  },
  {
    id: 3,
    name: 'Dinner',
  },
  {
    id: 4,
    name: 'Snacks',
  },
];

export const filterCat2 = [
  {
    id: 1,
    name: 'Gluten free',
  },
  {
    id: 2,
    name: 'Dairy free',
  },
  {
    id: 3,
    name: 'Vegetarian',
  },
  {
    id: 4,
    name: 'Paleo',
  },
  {
    id: 5,
    name: 'FODMAP',
  },
  {
    id: 6,
    name: 'Ketogenic diet',
  },
];

export const IngredientsData = [
  {
    title: 'Milk, Eggs, & Dairy',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Meat',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Fish & Seafood',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Cereal & Seeds',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Nuts',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Legumes',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Fruits',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Vegetables',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Spices',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
  {
    title: 'Edible Mushrooms',
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
];

export const AllergiesData = [
  {
    content: [
      'Buttermilk',
      'Camembert',
      'Emmental',
      'Gouda',
      'Cows milk',
      'Mozzarella',
      'Parmesan',
      'Buffalo milk',
      'Camel milk',
    ],
  },
];

export const settingData = [
  {
    icon: goalGreen,
    name: 'Goals / Purpose',
    onpress: (navigate, route) => navigate(route),
    screenName: 'SettingGoalsScreen',
  },
  {
    icon: AllergiesGreen,
    name: 'Allergies',
    onpress: (navigate, route) => navigate(route),
    screenName: 'SettingAllergiesScreen',
  },
  {
    icon: DietaryGreen,
    name: 'Dietary restrictions',
    onpress: (navigate, route) => navigate(route),
    screenName: 'SettingDietaryScreen',
  },
];

export const profileData = [
  {
    icon: informationGreen,
    name: 'About Sensifull',
    onpress: (navigate, route) => Linking.openURL('https://www.google.com/'),
  },
  {
    icon: policyGreen,
    name: 'Privacy Policy',
    onpress: (navigate, route) => Linking.openURL('https://www.google.com/'),
  },
  {
    icon: termsGreen,
    name: 'Terms and Conditions',
    onpress: (navigate, route) => Linking.openURL('https://www.google.com/'),
  },
  // {
  //   icon: starGreen,
  //   name: 'Rate Us',
  // },
];
