const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({
        type: 'LOGOUT',
    });
};

export default logoutUser;