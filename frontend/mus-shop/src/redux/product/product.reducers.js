import ProductActionTypes from './product.types';

const PRODUCT_LIST_INITIAL_STATE = {
    products: [],
    error: null
};

const PRODUCT_DETAILS_INITIAL_STATE = {
    product: null,
    reviews: [],
    error: null
};

export const productListReducer = (state = PRODUCT_LIST_INITIAL_STATE, action) => {
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
                error: action.payload,
            }
        default:
            return state;
    };
};

export const productDetailsReducer = (state = PRODUCT_DETAILS_INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                product: null,
            }
        case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
            return{
                ...state,
                loading:false,
                product: action.payload
            }
        case ProductActionTypes.PRODUCT_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    };
};