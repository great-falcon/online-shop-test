import { GET_ITEMS_SUCCESS } from '../actions/actionTypes'

const initialState = {
  itemsList: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {itemsList: action.payload}
    default:
      return state;
  }
}