import { combineReducers } from 'redux';
import assign from 'object-assign';
import { topNavSight } from './constant';

const initialState = {
  currentShopId:'',
  allShopId: []
};

const topNavReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case topNavSight.SET_SHOP_ID:
        return Object.assign({}, state, {
          currentShopId: payload,
        });
      case topNavSight.GET_ALL_SHOP_ID:
        console.log('allShopId',payload)
        return Object.assign({}, state, {
          allShopId: payload,
          currentShopId: payload[0].shopId
        });
    default:
      return state;
  }
};
 
export default topNavReducer