import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
// import { productListReducer } from "./reducers/ProductReducers";
// import { cartReducer } from "./reducers/CartReducers";


// const reducer = combineReducers({
//   productList: productListReducer,
//   cart: cartReducer,
// });

const cartItemsFromLocalStorage = localStorage.getItem('cartItem')
? JSON.parse(localStorage.getItem("cartItem"))
: []

//login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem("userInfo"))
: null;

//shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem("shippingAddress"))
: {};

const initialState = {
    cart : {
        cartItems : cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
};
const middleware = [thunk];

const store = createStore(
  rootReducers, 
  initialState,
//   reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
