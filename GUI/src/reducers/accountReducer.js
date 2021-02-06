import * as actionTypes from '../action/types';

const initialState = {
    token: localStorage.getItem('token'),
    is_authenticated: null,
    contact_res: false,
    voucher_purchase_res: '',
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.CONTACT_SENT:
            return {
                ...state,
                ...action.payload,
                contact_res: action.payload,
            };
        case actionTypes.VOUCHER_PURCHASE_SUCCESSFUL:
            return {
                ...state,
                ...action.payload,
                voucher_purchase_res: action.payload,
            };
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
