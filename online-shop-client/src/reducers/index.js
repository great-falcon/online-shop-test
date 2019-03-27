import { combineReducers } from "redux";
import shoppingCart from './shoppingCart';
import items from './items';
import loading from './loading'
import errorHandling from './errorHandling'
import order from './order'


export default combineReducers(
  {
    items,
    shoppingCart,
    loading,
    errorHandling,
    order
  }
)