import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const authInitial = {
    isAuthenticated: false,
    username: ''
}

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(authInitial);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};