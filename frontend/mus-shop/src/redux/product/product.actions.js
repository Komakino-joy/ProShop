import axios from 'axios';
import ProductActionTypes from './product.types';


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_REQUEST
        });

        const { data } = await axios.get('/api/products')

        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_FAILURE,
            payload: error.response && error.response.data.message 
            ? error.response.data.message
            : error.message,
        });
    };
};