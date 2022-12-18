const authReducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
            };
        case 'LOGIN_FAIL':
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}

export default authReducer;