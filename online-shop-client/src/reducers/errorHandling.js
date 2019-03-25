import { SHOW_ERROR, HIDE_ERROR} from '../actions/actionTypes'

const initialState = {
  isError: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {isError: true, error: action.payload}
    case HIDE_ERROR:
      return {isError: false, error: ''}
    default:
      return state;
  }
}