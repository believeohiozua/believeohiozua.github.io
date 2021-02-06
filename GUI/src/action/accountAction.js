import axios from 'axios';
import * as actionTypes from './types';
import { returnErrors, createMessage } from './alertAction';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/', {
            username: email,
            password: password
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                dispatch(createMessage({ authSignup: 'Welcome Back!' }));
            })
            .catch(error => {
                dispatch(authFail(error))
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}

export const authSignup = (firstName, lastName, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                dispatch(createMessage({ authSignup: 'SUCCESSFUL!: Please Verify your Email and Sign In!' }));
            })
            .catch(error => {
                dispatch(authFail(error))
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}

export const sendPurchaseData = (
    sendData

) => {
    return dispatch => {
        axios.post('/api/paymentdata/', {
            names: sendData.names,
            location: sendData.location,
            phone_number: sendData.phone_number,
            email: sendData.email,
            meter_number: sendData.meter_number,
            tariff: sendData.tariff,
            amount: sendData.amount,
            reference: sendData.reference
        })
            .then(res => {
                dispatch({
                    type: actionTypes.VOUCHER_PURCHASE_SUCCESSFUL,
                    payload: res.data.paymentdata,
                });
                dispatch(createMessage({ generalSuccessMessage: 'Tanscaction In progress' }));
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}
export const postContact = (
    full_names,
    phone_number,
    email,
    subject,
    message,

) => {
    return dispatch => {
        axios.post('/api/contact_us/', {
            full_names: full_names,
            email: email,
            phone_number: phone_number,
            subject: subject,
            message: message,
        })
            .then(res => {
                dispatch(createMessage({ generalSuccessMessage: 'Message sent! Thank you ' }));
                dispatch({
                    type: actionTypes.CONTACT_SENT,
                    payload: res.data.contact,
                });
            })
            .catch(error => {
                dispatch(returnErrors(error.response.data, error.response.status));
            })
    }
}
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}
