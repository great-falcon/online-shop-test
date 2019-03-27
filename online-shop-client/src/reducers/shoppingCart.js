import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  CLEAR_SHOPPING_CART
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
          item => item._id !== action.payload
        )
      };
    case CHANGE_QUANTITY:
      return {
        itemsInCart: state.itemsInCart.map(item => {
          if (item._id === action.payload._id) {
            item.count = action.payload.newCount;
          }
          return item;
        })
      };
    case CLEAR_SHOPPING_CART:
      return { itemsInCart: [] }
    default:
      return state;
  }
};
