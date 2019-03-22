import {CHANGE_QUANTITY} from '../actionTypes';

export default (id, newCount) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      id,
      newCount
    }
  }
}