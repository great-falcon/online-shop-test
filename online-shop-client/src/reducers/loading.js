import { LOADING_ON, LOADING_OFF } from '../actions/actionTypes'

const initialState = {
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ON:
      return {isLoading: true}
    case LOADING_OFF:
      return {isLoading: false}
    default:
      return state;
  }
}