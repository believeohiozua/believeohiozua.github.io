import * as actionTypes from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    is_authenticated: null,
    endpoint: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('token', action.token);
            console.log("from reducer ", action.token)
            return {
                ...state,
                ...action.payload,
                is_authenticated: true,
                endpoint: action,
            };
        case actionTypes.AUTH_FAIL:
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                is_authenticated: false,
                isLoading: false,
            };
        default:
            return state;
    }
}
