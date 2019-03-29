import { put, takeLatest, call, delay } from "redux-saga/effects";
import { shop } from "../api";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SHOW_ERROR,
  LOGIN_REQUEST,
  LOADING_ON,
  LOADING_OFF
} from "../actions/actionTypes";

function* registerUser({payload}) {
  try {
    yield put({ type: LOADING_ON });
    const resp = yield call(shop.register, payload);

    yield delay(1000);

    yield put({ type: SIGNUP_SUCCESS, payload: {token: resp.data} });
    yield put({ type: LOADING_OFF });

    yield put({type: LOGIN_REQUEST, payload })
  } catch (error) {
    yield put({ type: LOADING_OFF });
    yield put({ type: SHOW_ERROR, payload: error.response.statusText });
  }
}

export function* watchUserRegister() {
  yield takeLatest(SIGNUP_REQUEST, registerUser);
}
