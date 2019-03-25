import { REMOVE_FROM_CART } from '../actionTypes';

export default (_id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: _id,
  }
}