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
    userUpdateProfileReducer,
    userListReducer,
} from './user/user.reducers';

import { 
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer
 } from './order/order.reducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer, 
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
});

export default rootReducer;