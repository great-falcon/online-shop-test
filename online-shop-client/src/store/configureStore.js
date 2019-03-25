import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watchItemsFetch } from "../sagas/fetchItems";


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk)
));

function* rootSaga() {
  yield all([
    watchItemsFetch(),
  ])
}

sagaMiddleware.run(rootSaga)