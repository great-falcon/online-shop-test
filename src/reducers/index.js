import { combineReducers } from "redux";
import shoppingCart from './shoppingCart';
import items from './items'


export default combineReducers(
  {
    items,
    shoppingCart,
  }
)