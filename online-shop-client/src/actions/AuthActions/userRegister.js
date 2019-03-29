import { SIGNUP_REQUEST } from '../actionTypes';

export default (email, password) => {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      email,
      password
    }
  }
}