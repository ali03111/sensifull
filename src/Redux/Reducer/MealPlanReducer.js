import {types} from '../types';

const initial_state = {
  mealPlans: [],
};

const actionMap = {
  [types.addPlan]: (state, act) => {
    console.log('sjkdbvjksbdjkvbsdjkvbsdjkbvkjlsdbvlksdbvkljds', act?.payload);
    let copyState = [...state?.mealPlans];
    let filterData = copyState?.filter(
      item => item?.category?.meals?.id != act.payload?.category?.meals?.id,
    );
    console.log(
      'filterDatafilterDatafilterDatafilterDatafilterDatafilterData',
      JSON.stringify(filterData),
    );

    if (filterData.length > 0) {
      filterData.push(act.payload);
    } else {
      filterData = [...state.mealPlans, act.payload];
    }

    return {
      mealPlans: filterData,
    };
  },
  [types.ClearPlan]: () => initial_state,
};

export default function (state = initial_state, action) {
  const handler = actionMap[action.type];
  return handler ? handler(state, action) : state;
}
