import { combineReducers } from "redux";

import { productListReducer } from './product/product.reducers'

const rootReducer = combineReducers({
    productList: productListReducer,
});

export default rootReducer;