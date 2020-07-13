import API from './API';
import { addAlertMessage } from './AlertMessages';
import axios from 'axios';
import history from '../history';
import jwtDecode from 'jwt-decode'

export function setCurrentUser (user) {
    return {
        type: 'SET_CURRENT_USER', 
        user
    };
};

export function userLogin (userData) {
    return (dispatch) => {
        return API.post('/api/login', userData).then(
            (res) => {
                console.log(res)
                if(res.data.success) {
                    const jwtToken = res.data.data.user_token;
                    localStorage.setItem('jwtToken', jwtToken)
                    dispatch(setCurrentUser(jwtDecode(jwtToken)))
                    dispatch(addAlertMessage({ type: 'success', text: res.data.Message }));
                    history.push('/dashboard');
                } else if (!res.data.success) {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.Message }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}

export function userLogout() {
    return (dispatch) => {
        localStorage.removeItem('jwtToken');
        dispatch(setCurrentUser({}));
        window.location.pathname = '/';
    }
}

export function forgotPassword (userData) {
    return (dispatch) => {
        return API.post('/api/forgot', userData).then(
            (res) => {
                console.log(res)
                if(res.data.success) {
                    dispatch(addAlertMessage({ type: 'success', text: 'Password is send to your Registered Email'  }))
                    history.push('/')
                } else {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.Message }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}