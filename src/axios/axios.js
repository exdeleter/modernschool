﻿import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5217/api',
    timeout: 100000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
})

API.interceptors.request.use(function (config) {
    // Do something before request is sent
    // eslint-disable-next-line no-debugger
    debugger;
    return config;
}, function (error) {
    // Do something with request error
    alert(error)
    console.log("ошибка")
    return Promise.reject(error);
});

export default API