import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk)
));

sagaMiddleware.run(rootSaga)