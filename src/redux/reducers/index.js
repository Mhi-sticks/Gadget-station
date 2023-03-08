import addItem from "./addItem";
import { combineReducers } from "redux";
import { productListReducer } from "../reducers/ProductReducers";
import { cartReducer } from "../reducers/CartReducers";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./userReducers";
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from "./OrderReducer";

const rootReducers = combineReducers({
  addItem,
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer, 
  orderCreate:orderCreateReducer, 
  orderDetails:orderDetailsReducer, 
  orderPay:orderPayReducer, 
  orderListMy:orderListMyReducer, 

});
export default rootReducers;
