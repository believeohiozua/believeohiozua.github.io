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
        axios.post('https://coinlynk.herokuapp.com/api/v1/auth/login/', {
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
        axios.post('https://coinlynk.herokuapp.com/api/v1/auth/register/', {
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
    names,
    location,
    phone_number,
    email,
    meter_number,
    tariff,
    amount,
    reference,
) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('/api/paymentdata/', {
            names: names,
            location: location,
            phone_number: phone_number,
            email: email,
            meter_number: meter_number,
            tariff: tariff,
            amount: amount,
            reference: reference,

        })
            .then(res => {
                dispatch(createMessage({ authSignup: res }));
            })
            .catch(error => {
                dispatch(authFail(error))
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
        axios.post('/api/contactus/', {
            full_names: full_names,
            email: email,
            phone_number: phone_number,
            subject: subject,
            message: message,
        })
            .then(res => {
                dispatch(createMessage({ generalSuccessMessage: 'Thanks Message Sent!' }));
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
