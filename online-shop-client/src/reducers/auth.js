import { LOGIN_SUCCESS, LOGIN_FAILED } from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token, isAuth: true, error: "" };
    case LOGIN_FAILED:
      return { ...state, error: action.payload};
    default:
      return state;
  }
};
