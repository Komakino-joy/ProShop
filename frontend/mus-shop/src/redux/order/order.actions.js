import OrderActionTypes from './order.types';
import axios from 'axios';

export const createOrder = (order) => async (dispatch ,getState) => {

    try {
        dispatch({
            type: OrderActionTypes.ORDER_CREATE_REQUEST
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post(
            `/api/orders`, 
            order,
            config
        );

        dispatch({
            type: OrderActionTypes.ORDER_CREATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: OrderActionTypes.ORDER_CREATE_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    };
};

export const getOrderDetails = (id) => async (dispatch ,getState) => {

    try {
        dispatch({
            type: OrderActionTypes.ORDER_DETAILS_REQUEST
        });

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.get(`/api/orders/${id}`, config);

        dispatch({
            type: OrderActionTypes.ORDER_DETAILS_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: OrderActionTypes.ORDER_DETAILS_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    };
};