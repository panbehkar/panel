const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { isAuthenticated: true, user: action.user };
        case 'LOGIN_ERROR':
            return state;
        default:
            return state;
    };
};

export default AuthReducer;