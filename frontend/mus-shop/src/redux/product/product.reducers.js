import ProductActionTypes from './product.types';

const INITIAL_STATE = {
    products: [],
};

export const productListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                products: [],
            }
        case ProductActionTypes.PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                products: action.payload
            }
        case ProductActionTypes.PRODUCT_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                payload: action.payload,
            }
        default:
            return state;
    };
};