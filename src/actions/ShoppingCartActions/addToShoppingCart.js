import { ADD_TO_CART, CHANGE_QUANTITY } from "../actionTypes";

export default item => (dispatch, getState) => {
  const state = getState();
  const index = state.shoppingCart.itemsInCart.findIndex(
    elem => elem.id === item.id
  );
  if (index !== -1) {
    dispatch({
      type: CHANGE_QUANTITY,
      payload: {
        id: item.id,
        newCount: item.count + 1
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
