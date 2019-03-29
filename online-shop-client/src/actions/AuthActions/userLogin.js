import { LOGIN_REQUEST } from '../actionTypes';

export default (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email,
      password
    }
  }
}