import axiosInstance from '../../helpers/axiosInstance';

const loginUser = (type, param1, param2) => async (dispatch) => {
    dispatch({
        type: 'LOADING',
    })
    if (type === 1) {
        axiosInstance
            .post(`/api/login/password`, { email: param1, password: param2 })
            .then(async (res) => {
                localStorage.setItem('token', res.data.accessToken);
                let userStr = JSON.stringify(res.data.user)
                localStorage.setItem('user', userStr);
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
                localStorage.setItem('token', res.data.accessToken);
                localStorage.setItem('user', JSON.stringify(res.data.user));
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

export default loginUser;