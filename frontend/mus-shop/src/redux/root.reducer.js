import { combineReducers } from "redux";

import { 
    productListReducer,
    productDetailsReducer 
} from './product/product.reducers';

import { 
    cartReducer
} from './cart/cart.reducers';

import {
    userLoginReducer
} from './user/user.reducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

export default rootReducer;