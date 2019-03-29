import { put, takeLatest, call, delay, select } from "redux-saga/effects";
import { shop } from "../api";
import {
  SEND_ORDER,
  SEND_ORDER_SUCCESS,
  LOADING_ON,
  LOADING_OFF,
  SHOW_ERROR,
  CLEAR_SHOPPING_CART
} from "../actions/actionTypes";

function* sendOrder() {
  const {
    shoppingCart: { itemsInCart }
  } = yield select();

  const params = {
    order: itemsInCart.map(item => ({
      id: item._id,
      count: item.count
    }))
  };

  try {
    yield put({ type: LOADING_ON });
    const resp = yield call(shop.sendOrder, params);
    console.log(resp);
    
    yield delay(2000);

    yield put({ type: LOADING_OFF });
    yield put({type: SEND_ORDER_SUCCESS, payload: resp.data})
    yield put({type: CLEAR_SHOPPING_CART})
  } catch (error) {
    yield put({ type: SHOW_ERROR, payload: error });
  }
}

export function* watchSendOrder() {
  yield takeLatest(SEND_ORDER, sendOrder);
}
