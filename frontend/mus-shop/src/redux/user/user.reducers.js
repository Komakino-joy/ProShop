import UserActionTypes from './user.types'
const INITIAL_STATE = {
    laoding: false
}

export const userLoginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UserActionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                userInfo: action.payload
            }
        case UserActionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case UserActionTypes.USER_LOG_OUT:
            return {}
        default:
            return state;
    };
};