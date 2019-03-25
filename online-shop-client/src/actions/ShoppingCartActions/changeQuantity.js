import {CHANGE_QUANTITY} from '../actionTypes';

export default (_id, newCount) => {
  return {
    type: CHANGE_QUANTITY,
    payload: {
      _id,
      newCount
    }
  }
}