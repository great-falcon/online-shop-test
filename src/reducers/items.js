import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  itemsList: [],
  error: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return {...state, isLoading: true}
    case GET_ITEMS_SUCCESS:
      return {...state, isLoading: false, itemsList: action.payload, error: ''}
    default:
      return state;
  }
}