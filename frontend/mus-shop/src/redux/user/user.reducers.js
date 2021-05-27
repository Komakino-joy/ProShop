import UserActionTypes from './user.types'
const INITIAL_STATE = {
    loading: false,
    success: false,
}

const INITIAL_DETAILS_STATE = {
    user: {}
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

export const userRegisterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UserActionTypes.USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                userInfo: action.payload
            }
        case UserActionTypes.USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    };
};

export const userDetailsReducer = (state = INITIAL_DETAILS_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case UserActionTypes.USER_DETAILS_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.payload
            }
        case UserActionTypes.USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    };
};

export const userUpdateProfileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.USER_UPDATE_PROFILE_REQUEST:
            return {
                loading: true,
            }
        case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                loading:false,
                success: true,
                userInfo: action.payload
            }
        case UserActionTypes.USER_UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    };
};