import { put, takeLatest, call, delay, select } from "redux-saga/effects";
import { shop } from "../api";
import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  LOADING_ON,
  LOADING_OFF,
  SHOW_ERROR
} from "../actions/actionTypes";

function* fetchItems() {
  const {
    auth: { token }
  } = yield select();

  try {
    yield put({ type: LOADING_ON });
    const items = yield call(shop.fetchItems, { token });

    yield delay(2000);

    yield put({ type: LOADING_OFF });
    yield put({ type: GET_ITEMS_SUCCESS, payload: items.data });
  } catch (error) {
    yield put({ type: LOADING_OFF });
    yield put({ type: SHOW_ERROR, payload: error.message });
  }
}

export function* watchItemsFetch() {
  yield takeLatest(GET_ITEMS_REQUEST, fetchItems);
}
