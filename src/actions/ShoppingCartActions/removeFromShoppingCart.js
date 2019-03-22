import { REMOVE_FROM_CART } from '../actionTypes';

export default (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}