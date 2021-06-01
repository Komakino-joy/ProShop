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

const PRODUCT_DELETE_INITIAL_STATE = {};
const PRODUCT_CREATE_INITIAL_STATE = {};
const PRODUCT_UPDATE_INITIAL_STATE = { product:{} };
const PRODUCT_REVIEW_CREATE_INITIAL_STATE = {};
const PRODUCT_TOP_INTIAL_STATE = { products:[] };

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
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
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
                loading:false,
                product: action.payload
            }
        case ProductActionTypes.PRODUCT_DETAILS_FAILURE: 
            return { 
                loading: false, 
                error: action.payload }

        case ProductActionTypes.PRODUCT_DETAILS_RESET:
            return { product: { reviews: [] } }
        default:
            return state;
    };
};

export const productDeleteReducer = (state = PRODUCT_DELETE_INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductActionTypes.PRODUCT_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
            return{
                ...state,
                loading:false,
                success: true,
            }
        case ProductActionTypes.PRODUCT_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    };
};

export const productCreateReducer = (state = PRODUCT_CREATE_INITIAL_STATE, action) => {
    switch(action.type) {

        case ProductActionTypes.PRODUCT_CREATE_REQUEST:
            return {
                loading: true,
            };

        case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
            return{
                loading:false,
                success: true,
                product: action.payload,
            };

        case ProductActionTypes.PRODUCT_CREATE_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };

        case ProductActionTypes.PRODUCT_CREATE_RESET:
            return {};

        default:
            return state;
    };
};


export const productUpdateReducer = (state = PRODUCT_UPDATE_INITIAL_STATE, action) => {
    switch(action.type) {

        case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
            return {
                loading: true,
            };

        case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
            return{
                loading: false,
                success: true,
                product: action.payload,
            };

        case ProductActionTypes.PRODUCT_UPDATE_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };

        case ProductActionTypes.PRODUCT_UPDATE_RESET:
            return { product:{} };

        default:
            return state;
    };
};

export const productReviewCreateReducer = (state = PRODUCT_REVIEW_CREATE_INITIAL_STATE, action) => {
    switch(action.type) {

        case ProductActionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
            return {
                loading: true,
            };

        case ProductActionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
            return{
                loading: false,
                success: true,
            };

        case ProductActionTypes.PRODUCT_CREATE_REVIEW_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };

        case ProductActionTypes.PRODUCT_CREATE_REVIEW_RESET:
            return {};

        default:
            return state;
    };
};

export const productTopRatedReducer = (state = PRODUCT_TOP_INTIAL_STATE, action) => {
    switch(action.type) {

        case ProductActionTypes.PRODUCT_TOP_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case ProductActionTypes.PRODUCT_TOP_SUCCESS:
            return{
                loading: false,
                products: action.payload,
            };

        case ProductActionTypes.PRODUCT_TOP_FAILURE:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    };
};