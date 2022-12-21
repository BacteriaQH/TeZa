const user = JSON.parse(localStorage.getItem('user'));
const authInitialState = {
    isLoggedIn: user ? true : false,
    data: user ? user : null,
    err: null,
    loading: false
};


export default authInitialState;