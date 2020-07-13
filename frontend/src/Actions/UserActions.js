import API from './API';
import { addAlertMessage } from './AlertMessages';
import history from '../history';


export function getUserList (rows, count) {
    return {
        type: 'GET_USERS_LIST', 
        rows,
        count
    };
};

export function getUserDetail (userData) {
    return {
        type: 'GET_USER_DETAIL', 
        userData
    };
};

export function fetchUserList( page, limit) {
    return (dispatch) => {
        return API.get(`/api/users?page=${page}&limit=${limit}`).then(
            (res) => {
                if(res.data) {
                    const rows = res.data.rows
                    const count = res.data.count
                    dispatch(getUserList(rows, count))
                } else {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.Message }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}

export function searchUser(searchString, page, limit) {
    return (dispatch) => {
        return API.get(`/api/searchUsers?searchString=${searchString}&page=${page}&limit=${limit}`).then(
            (res) => {
                if(res.data) {
                    const rows = res.data.rows
                    const count = res.data.count
                    dispatch(getUserList(rows, count))
                } else {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.Message }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}

export function getUserDetails(userId) {
    return (dispatch) => {
        return API.get(`/api/users/${userId}`).then(
            (res) => {
                if(res.data.success) {
                    dispatch(getUserDetail(res.data.result))
                } else if (!res.data.success) {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.error }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}


export function updateUserDetails(userData) {
    return (dispatch) => {
        return API.post(`/api/update`, userData).then(
            (res) => {
                if(res.data.success) {
                    dispatch(addAlertMessage({ type: 'success', text: res.data.Message }))
                    history.push('/users')
                } else if (!res.data.success) {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.error }))
                }
            }
        )
        .catch(err => console.log(err))
    }
}

export function createUser(userData) {
    return (dispatch) => {
        return API.post('/api/create', userData).then(
            (res) => {
                if(res.data.success) {
                    dispatch(addAlertMessage({ type: 'success', text: 'User Added Successfully' }))
                    history.push('/users')
                } else if (!res.data.success) {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.Message }))
                }
            }
        )
    }
}

export function deleteUser(userId) {
    return (dispatch) => {
        return API.post(`/api/delete`, { userId: userId }).then(
            (res) => {
                if(res.data.success) {
                    dispatch(addAlertMessage({ type: 'success', text: "User Removed successfully" }))
                } else if (!res.data.success) {
                    dispatch(addAlertMessage({ type: 'error', text: res.data.error }))
                }
                return res
            }
        )
    }
}