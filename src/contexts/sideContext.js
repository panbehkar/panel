import React, { createContext, useReducer } from 'react';
import { sideReducer } from '../reducers/sideReducer';

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
    const [sideOpen, dispatch] = useReducer(sideReducer, false);
    return (
        <SideContext.Provider value={{ sideOpen, dispatch }}>
            {children}
        </SideContext.Provider>
    );
};