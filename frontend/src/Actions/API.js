import axios from "axios";
import config from '../config';
import jwtDecode from 'jwt-decode';

const API = axios.create({
    headers: {
        common: {
            Authorization: "",
            userid: ""
        }
    },
    baseURL: config.apiHost
});

API.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('jwtToken');
        console.log(token)
        const userid = token === null ? "" : jwtDecode(token).User_id;
        config.headers["Authorization"] = token === null ? "" : token;
        config.headers["userid"] = token === null ? "" : userid;
        return config;
    },
    error => Promise.reject(error)
);

export default API;
