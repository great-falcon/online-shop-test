import { SEND_ORDER_SUCCESS } from '../actions/actionTypes'

const initialState = {
  itemsList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_ORDER_SUCCESS:
      return {itemsList: action.payload}
    default:
      return state;
  }
}