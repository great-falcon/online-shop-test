import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {makeRequest} from '../utils/requestFunction';
import { GET_ITEMS_REQUEST, GET_ITEMS_SUCCESS } from '../actions/actionTypes';

function* fetchItems() {
  const itemsArr = yield makeRequest('/photos');

  yield put({type: GET_ITEMS_SUCCESS, payload: itemsArr.slice(0, 100)})
}

function* getItemsWatcher() {
  yield takeLatest(GET_ITEMS_REQUEST, fetchItems)
}

export default function* rootSaga() {
  yield all([
    getItemsWatcher(),
  ])
}

