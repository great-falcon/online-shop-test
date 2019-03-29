import { put, takeLatest, call, delay } from "redux-saga/effects";
import { shop } from "../api";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOADING_ON,
  LOADING_OFF
} from "../actions/actionTypes";

function* loginUser({payload}) {
  try {
    yield put({ type: LOADING_ON });
    const resp = yield call(shop.login, payload);

    yield delay(1000);

    yield put({ type: LOADING_OFF });
    yield put({ type: LOGIN_SUCCESS, payload: {token: resp.data} });
  } catch (error) {
    yield put({ type: LOGIN_FAILED, payload: error.response.statusText });
  }
}

export function* watchUserLogin() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}
