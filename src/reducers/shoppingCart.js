import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY
} from "../actions/actionTypes";

const initialState = {
  itemsInCart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { itemsInCart: state.itemsInCart.concat(action.payload)};
    case REMOVE_FROM_CART:
      return {
        itemsInCart: state.itemsInCart.filter(
          item => item.id !== action.payload
        )
      };
    case CHANGE_QUANTITY:
      return {
        itemsInCart: state.itemsInCart.map(item => {
          if (item.id === action.payload.id) {
            item.count = action.payload.newCount;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
