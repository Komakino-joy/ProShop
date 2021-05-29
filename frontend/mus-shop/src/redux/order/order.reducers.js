import OrderActionTypes from './order.types';

const INITIAL_STATE_CREATE = {};
const INITIAL_STATE_DETAILS = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
};
const INITIAL_STATE_PAY = {};
const INITIAL_STATE_ORDER_LIST_MY = {
    orders: []
};

export const orderCreateReducer = (state = INITIAL_STATE_CREATE, action) => {
    switch(action.type) {
        case OrderActionTypes.ORDER_CREATE_REQUEST:
            return{
                loading: true
            }

        case OrderActionTypes.ORDER_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload,
            };
        
        case OrderActionTypes.ORDER_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            };

        default:
            return state
    }
}


export const orderDetailsReducer = (state = INITIAL_STATE_DETAILS, action) => {
    switch(action.type) {
        case OrderActionTypes.ORDER_DETAILS_REQUEST:
            return{
                loading: true
            }

        case OrderActionTypes.ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
            };
        
        case OrderActionTypes.ORDER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state
    }
}

export const orderPayReducer = (state = INITIAL_STATE_PAY, action) => {
    switch(action.type) {
        case OrderActionTypes.ORDER_PAY_REQUEST:
            return{
                loading: true
            }

        case OrderActionTypes.ORDER_PAY_SUCCESS:
            return {
                loading: false,
                success: true,
            };
        
        case OrderActionTypes.ORDER_PAY_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        
        case OrderActionTypes.ORDER_PAY_RESET:
            return {}

        default:
            return state
    };
};

export const orderListMyReducer = (state = INITIAL_STATE_ORDER_LIST_MY, action) => {
    switch(action.type) {
        case OrderActionTypes.ORDER_LIST_MY_REQUEST:
            return{
                loading: true
            }

        case OrderActionTypes.ORDER_LIST_MY_SUCCESS:
            return {
                loading: false,
                orders: action.payload,
            };
        
        case OrderActionTypes.ORDER_LIST_MY_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state
    };
};