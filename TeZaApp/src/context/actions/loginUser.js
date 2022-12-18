import axiosInstance from './../../helpers/axiosInstance';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default (type, param1, param2) => async (dispatch) => {
    dispatch({
        type: 'LOADING',
    })

    const { data: ip } = await axios.get('https://api.iplocation.net/?cmd=get-ip');
    console.log('ip', ip);
    const res = await axios.get(`https://api.bigdatacloud.net/data/client-info`);
    console.log('agent', res.data);
    if (type === 1) {
        axiosInstance
            .post(`/api/login/password`, { email: param1, password: param2 })
            .then(async (res) => {
                await AsyncStorage.setItem('token', res.data.accessToken);
                let userStr = JSON.stringify(res.data.user)
                await AsyncStorage.setItem('user', userStr);
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: res.data
                })
            }).catch((err) => {
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: err.response
                        ? err.response.data
                        : { error: 'Something went wrong, try agin' },
                });
            })
    } else if (type === 2) {
        axiosInstance
            .post(`/api/login/otp`, { email: param1, otp: param2 })
            .then((res) => {
                AsyncStorage.setItem('token', res.data.accessToken);
                AsyncStorage.setItem('user', JSON.stringify(res.data.user));
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: res.data
                })
            }).catch((err) => {
                dispatch({
                    type: 'LOGIN_FAIL',
                    payload: err.response
                        ? err.response.data
                        : { error: 'Something went wrong, try agin' },
                });
            })
    }
}