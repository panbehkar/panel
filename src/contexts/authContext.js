import React, { createContext, useReducer } from 'react';
import AuthReducer from '../reducers/authReducer';

export const AuthContext = createContext();

const authInitial = {
    isAuthenticated: false,
    user: {
        username: '',
        password: '',
        remember: false
    }
};

export const AuthProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(AuthReducer, authInitial);
    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};