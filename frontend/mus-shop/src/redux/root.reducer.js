import { combineReducers } from "redux";

import { 
    productListReducer,
    productDetailsReducer 
} from './product/product.reducers';

import { 
    cartReducer
} from './cart/cart.reducers';

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer
} from './user/user.reducers';

import { 
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer
 } from './order/order.reducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
});

export default rootReducer;