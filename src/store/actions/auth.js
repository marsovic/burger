import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (errpr) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDphOaprVVu7Ji_g_UYD4A5so1Y4n-qZnk", authData)
            .then(res => {
                console.log(res)
                dispatch(authSuccess(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err))
            })
    };
};