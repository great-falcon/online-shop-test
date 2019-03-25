import { ADD_TO_CART, CHANGE_QUANTITY } from "../actionTypes";

export default item => (dispatch, getState) => {
  const state = getState();
  const index = state.shoppingCart.itemsInCart.findIndex(
    cartItem => cartItem._id === item._id
  );
  const itemInCart = state.shoppingCart.itemsInCart[index];
  if (index !== -1) {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: {
        _id: item._id,
        newCount: itemInCart.count + 1
      }
    });
  } else {
    item.count = 1;
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  }
};
